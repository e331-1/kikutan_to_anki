import Database from "sql.js"
import SevenZip, { SevenZipModule } from "7z-wasm";
import {APKG_SCHEMA,Model,Deck,Package} from "genanki-js"
type KikutanType = "basic" | "advanced" | "super"
type AnkiConfig = {
    kikutanType?: KikutanType
}
const sevenZip = await SevenZip();
class BrowserPackage extends Package {
    async downloadAsFile(fileName: string) {

        let db = this.db;
        db.run(APKG_SCHEMA);

        this.write(db)


        const data = db.export();
        
        sevenZip.FS.writeFile("collection.anki2", new Uint8Array(data));

        const media_info: { [key: number]: string } = {}

        this.media.forEach((m, i) => {
            if (m.filename != null) {
                sevenZip.FS.writeFile(i.toString(), m.filename)
            } else {
                sevenZip.FS.writeFile(i.toString(), m.data)
            }

            media_info[i] = m.name
        })

        sevenZip.FS.writeFile('media', JSON.stringify(media_info))

        /*zip.generateAsync({ type: "blob", mimeType: "application/apkg" }).then(function (content) {
            // see FileSaver.js
            saveAs(content, filename);
        });*/

        // 圧縮を実行
        const archiveName = `${fileName}.zip`;
        sevenZip.callMain(["a", "-tzip", archiveName, "package.apkg"]);

        // 圧縮されたデータを取得
        const compressedData = sevenZip.FS.readFile(archiveName);

        // Blobを作成し、ダウンロードリンクを生成
        const blob = new Blob([compressedData], { type: "application/zip" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = archiveName;

        // リンクをクリックしてダウンロードを開始
        link.click();

        // リソースを解放
        URL.revokeObjectURL(link.href);
    }
}
class Anki {
    sevenZip?: SevenZipModule
    kikutanWords: {
        advanced?: object,
        basic?: object,
        super?: object
    } = {}
    kikutanType: KikutanType
    constructor(
        {
            kikutanType = "basic"
        }: AnkiConfig = {}
    ) {
        this.kikutanType = kikutanType
        SevenZip().then((sevenZip) => {
            this.sevenZip = sevenZip;
            console.log("7z-wasm is ready to use.");
        })
    }
    private async handleFile(file: File) {
        if (typeof this.sevenZip == "undefined") {
            return
        }
        // FileオブジェクトをArrayBufferに変換
        const arrayBuffer = await file.arrayBuffer();
        const uint8Array = new Uint8Array(arrayBuffer);

        // 仮想ファイルシステムに書き込み
        const fileName = file.name;
        this.sevenZip.FS.writeFile(fileName, uint8Array);

        console.log(`File ${fileName} has been loaded into the virtual file system.`);
    }

    async loadApkFile(file: File) {
        if (typeof this.sevenZip == "undefined") {
            return
        }
        await this.handleFile(file);

        // 例: 仮想ファイルシステム内のファイルを解凍
        const archiveName = file.name; // 最初のファイルをアーカイブとして扱う例
        this.sevenZip.callMain(["x", archiveName]);

        // 解凍されたファイルを確認

        this.kikutanWords.basic = JSON.parse(this.sevenZip.FS.readFile("res/raw/app_redux_json_android_basic.json", { encoding: "utf8" }));
        this.kikutanWords.advanced = JSON.parse(this.sevenZip.FS.readFile("res/raw/app_redux_json_android_advanced.json", { encoding: "utf8" }));
        this.kikutanWords.super = JSON.parse(this.sevenZip.FS.readFile("res/raw/app_redux_json_android_super.json", { encoding: "utf8" }));
        console.log(`Extracted content`);

    }
    
    exportAnkiDeck() {
        var model = new Model({
            name: "Basic (and reversed card)",
            id: "1543634829843",
            flds: [
                { name: "Front" },
                { name: "Back" }
            ],
            req: [
                [0, "all", [0]],
                [1, "all", [1]]
            ],
            tmpls: [
                {
                    name: "Card 1",
                    qfmt: "{{Front}}",
                    afmt: "{{FrontSide}}\n\n<hr id=answer>\n\n{{Back}}",
                },
                {
                    name: "Card 2",
                    qfmt: "{{Back}}",
                    afmt: "{{FrontSide}}\n\n<hr id=answer>\n\n{{Front}}",
                }
            ],
        })

        var deck = new Deck(1276438724672, "Test Deck")

        deck.addNote(model.note(['this is front', 'this is back']))

        var p = new BrowserPackage()
        p.addDeck(deck)
        p.downloadAsFile("test.apkg")
    }

}


const anki = new Anki()
document.getElementById("submit")!.onclick = async (event) => {
    const files = (<HTMLInputElement>document.getElementById("apkfile")!).files;
    if (files) {

        for (const file of files) {
            anki.loadApkFile(file)
        }
    }
};

document.getElementById("export")!.onclick = async (event) => {
    anki.exportAnkiDeck()
}