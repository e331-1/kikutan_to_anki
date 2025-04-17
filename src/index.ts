import Tesseract from 'tesseract.js';

const scheduler = Tesseract.createScheduler();


document.getElementById("submit")!.onclick = async() => {
    for await (const file of (document.getElementById("screenshots") as HTMLInputElement)!.files!) {
        const imageUrl = await trim(URL.createObjectURL(file))
        
        const imageElement = document.createElement('img')
        imageElement.src=imageUrl
        document.getElementById('images')!.appendChild(imageElement);

        var result=await ocr(imageUrl)
        console.log(result)
    }
}

// Creates worker and adds to scheduler
async function ocr(url: string) {
    var workerGen = async () => {
        const worker = await Tesseract.createWorker(['eng', "jpn"]);
        scheduler.addWorker(worker);
    }
    var workerN = 4;
    console.log(url)
    var resArr = Array(workerN);
    for (let i = 0; i < workerN; i++) {
        resArr[i] = workerGen();
    }
    await Promise.all(resArr);
    /** Add 10 recognition jobs */
    var results = await Promise.all(Array(10).fill(0).map(() => (
        scheduler.addJob('recognize', url).then((x) => console.log(x.data.text))
    )))
    await scheduler.terminate(); // It also terminates all workers.
    return results
}

function trim(imageURL:string){
    return new Promise<string>((resolve, reject) => {
        var canvas = document.createElement('canvas');
        //var canvas = document.getElementsByTagName("canvas")[0]
        canvas.width=790
        canvas.height=1000
        var ctx = canvas.getContext('2d')!;

        var img = new Image();
        img.src = imageURL
        // imgは読み込んだ後でないとwidth,heightが0
        img.onload = function() {
            //ctx.drawImage(img, 130, 770, 790, 1000);
            ctx.drawImage(img,
                130,770,790,1000,
                0,0,790,1000);
            canvas.toBlob((blob)=>{
                resolve(URL.createObjectURL(blob!))
            })
        };
    })
}