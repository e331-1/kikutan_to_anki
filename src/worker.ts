import SevenZip, { FileSystem, SevenZipModule } from "7z-wasm";

export type SevenZipWorkerArguments={
    file:File,
    args:Array<string>,
    filesToUnzip?:Array<string>|"all",
    type?:"utf8"|"binary"
}
function checkMessageType(message: any): message is SevenZipWorkerArguments {
    return message && typeof message.file === 'object' && message.file instanceof File && Array.isArray(message.args);
}
self.addEventListener('message', async(e)=>{
    if (!(checkMessageType(e.data))) {
        console.error("The file is not a valid File object.", e.data);
        self.postMessage(new Error("The file is not a valid File object."));
        return
    }
    const file = e.data.file as File;
    const args = e.data.args as Array<string>;

    const sevenZip = await SevenZip()
    
    const arrayBuffer = await file.arrayBuffer();
    const uint8Array = new Uint8Array(arrayBuffer);
    const fileName = file.name;
    sevenZip.FS.writeFile(fileName, uint8Array);
    sevenZip.FS.chmod(fileName, 777);
    console.log(`File ${fileName} has been loaded into the virtual file system.`);

    sevenZip.callMain(args);

    //受け取ったデータの正規化
    if(e.data.filesToUnzip=="all"||typeof e.data.filesToUnzip=="undefined"){
        e.data.filesToUnzip=sevenZip.FS.readdir("/")
    }
    console.log(e.data.filesToUnzip)
    const returnFiles:Array<File>=[];
    e.data.filesToUnzip.forEach((filePath) => {
        const fileName=((<string>filePath).match(/(^|(?<=\/))[^/]*$/)??[])[0]??""
        try{
            sevenZip.FS.chmod(filePath, 777)
            returnFiles.push(
                new File(
                    [sevenZip.FS.readFile(filePath, { encoding: "binary" })],
                    fileName
                )
            );
        }catch(e){
            console.error(`Error reading file ${filePath}:`, e);
        }
    });

    self.postMessage(returnFiles);



}, false);