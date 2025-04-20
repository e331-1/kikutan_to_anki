import { Anki,KikutanType } from "./anki";
declare global {
    interface Window {
        anki: Anki
    }
}
const anki = new Anki()
window.anki = anki
window.onload = async () => {
    document.getElementById("apkfile")!.onchange = async (event) => {
        Array.from(<NodeListOf<HTMLElement>>document.querySelectorAll(".status.apk")).forEach((element) => {
            element.classList.remove("displayed")
        })
        const files = (<HTMLInputElement>document.getElementById("apkfile")!).files;
        if (files) {
            if(!files[0].name.endsWith(".apk")){
                alert("APKファイルではありません")
                return
            }
            document.getElementById("apkLoading")!.classList.add("displayed")
            anki.loadApkFile(files[0]).then(() => {
                
                document.getElementById("apkLoading")!.classList.remove("displayed")
                console.log("APK file loaded successfully.");
                (<HTMLSelectElement>document.getElementById("type")).disabled = false;
                document.getElementById("apkSuccess")!.classList.add("displayed");
                if ((<HTMLSelectElement>document.getElementById("type")!).value !== "") {
                    (<HTMLInputElement>document.getElementById("weekStart")).disabled = false;
                    (<HTMLInputElement>document.getElementById("weekEnd")).disabled = false;
                    (<HTMLInputElement>document.getElementById("audioFile")).disabled = false;
                    (<HTMLInputElement>document.getElementById("download")).disabled = false;
                    (<HTMLInputElement>document.getElementById("share")).disabled = false;

                }
            }
            ).catch((error) => {
                document.getElementById("apkLoading")!.classList.remove("displayed")
                console.error("Error loading APK file:", error);
                (<HTMLSelectElement>document.getElementById("type")!).disabled = true;
                document.getElementById("apkError")!.classList.add("displayed");
                document.getElementById("apkError")!.innerText=`エラー : ${error}`;
                (<HTMLInputElement>document.getElementById("weekStart")).disabled = true;
                (<HTMLInputElement>document.getElementById("weekEnd")).disabled = true;
                (<HTMLInputElement>document.getElementById("audioFile")).disabled = true;
                (<HTMLInputElement>document.getElementById("download")).disabled = true;
                (<HTMLInputElement>document.getElementById("share")).disabled = true;
            })
        }
    };

    document.getElementById("download")!.onclick = async (event) => {
        Array.from(<NodeListOf<HTMLElement>>document.querySelectorAll(".status.export")).forEach((element) => {
            element.classList.remove("displayed")
        })
        document.getElementById("exportLoading")!.classList.add("displayed");
        anki.exportAnkiDeck().then((file)=>{
            document.getElementById("exportLoading")!.classList.remove("displayed");
            document.getElementById("exportSuccess")!.classList.add("displayed");
            
            const link = document.createElement("a");
            link.href = URL.createObjectURL(file);
            link.download = `キクタン${(<HTMLSelectElement>document.getElementById("type")!).value}.apkg`; // ダウンロードするファイル名を指定
            link.click();
            URL.revokeObjectURL(link.href);

            console.log('success')
        }).catch((error) => {
            document.getElementById("exportLoading")!.classList.remove("displayed");
            document.getElementById("exportError")!.classList.add("displayed");
            document.getElementById("exportError")!.innerText=`エラー : ${error}`
        })
    }

    document.getElementById("share")!.onclick = async (event) => {
        Array.from(<NodeListOf<HTMLElement>>document.querySelectorAll(".status.export")).forEach((element) => {
            element.classList.remove("displayed")
        })
        document.getElementById("exportLoading")!.classList.add("displayed");
        anki.exportAnkiDeck().then(async(file)=>{
            await navigator.share({
                files:[file]
            })
            console.log('success')
            document.getElementById("exportLoading")!.classList.remove("displayed");
            document.getElementById("exportSuccess")!.classList.add("displayed");
            
        }).catch((error) => {
            document.getElementById("exportLoading")!.classList.remove("displayed");
            document.getElementById("exportError")!.classList.add("displayed");
            document.getElementById("exportError")!.innerText=`エラー : ${error}`
        })
    }

    document.getElementById("type")!.onchange = async (event) => {
        (<HTMLOptionElement>document.getElementById("optionDefault")!).disabled = true
        const type = (<HTMLSelectElement>document.getElementById("type")!).value as KikutanType
        const week = anki.setKikutanType(type);

        (<HTMLInputElement>document.getElementById("weekStart")).disabled = false;
        (<HTMLInputElement>document.getElementById("weekStart")).value = "1";
        (<HTMLInputElement>document.getElementById("weekStart")).max = week.toString();

        (<HTMLInputElement>document.getElementById("weekEnd")).disabled = false;
        (<HTMLInputElement>document.getElementById("weekEnd")).value = week.toString();
        (<HTMLInputElement>document.getElementById("weekEnd")).max = week.toString();

        (<HTMLInputElement>document.getElementById("audioFile")).disabled = false;
        (<HTMLInputElement>document.getElementById("download")).disabled = false;
        (<HTMLInputElement>document.getElementById("share")).disabled = false;
        anki.weekRange = [1, week]
    }
    document.getElementById("audioFile")!.onchange = async (event) => {
        //document.getElementById("loading")!.style.display = "block"
        Array.from(<NodeListOf<HTMLElement>>document.querySelectorAll(".status.audio")).forEach((element) => {
            element.classList.remove("displayed")
        })
        document.getElementById("audioLoading")!.classList.add("displayed")
        const files = (<HTMLInputElement>document.getElementById("audioFile")!).files;
        if (files) {
            anki.loadAudioZipFile(files).then(() => {
                document.getElementById("audioLoading")!.classList.remove("displayed")
                //document.getElementById("apkLoading")!.style.display = "none"
                console.log("audio file loaded successfully.");
                document.getElementById("audioSuccess")!.classList.add("displayed")
            }
            ).catch((error) => {
                //document.getElementById("apkLoading")!.style.display = "none"
                document.getElementById("audioLoading")!.classList.remove("displayed")
                console.error("Error loading audio file:", error);
                document.getElementById("audioError")!.classList.add("displayed")
                document.getElementById("audioError")!.innerText=`エラー : ${error}`;
            })
        }
    }
    Array.from(<HTMLCollectionOf<HTMLInputElement>>document.getElementsByClassName("range")).forEach((element) => {
        element.onchange = () => {
            const start = parseInt((<HTMLInputElement>document.getElementById("weekStart")).value)
            const end = parseInt((<HTMLInputElement>document.getElementById("weekEnd")).value)
            if (start > end) {
                (<HTMLInputElement>document.getElementById("weekStart")).value = end.toString()
            }
            if (end < start) {
                (<HTMLInputElement>document.getElementById("weekEnd")).value = start.toString()
            }

            anki.weekRange = [start, end]
            console.log(anki.weekRange)
        }
    })
}