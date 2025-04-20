import SevenZip, { FileSystem, SevenZipModule } from "7z-wasm";
import { Package, Deck, Note, Model, Field, Card, Media } from 'anki-apkg-generator'
import { SevenZipWorkerArguments } from "./worker"
export type KikutanType = "basic" | "advanced" | "super"
export type AnkiConfig = {
    kikutanType?: KikutanType
}
export class Anki {

    private kikutanWords: {
        advanced?: object,
        basic?: object,
        super?: object
    } = {}
    private kikutanType?: KikutanType
    private idCount: number = 0
    private idDate: Date = new Date()
    audioFiles:Array<File>=[]
    private reg = /(^|(?<=\/))[^/]*$/
    weekRange: Array<number> = []
    constructor(
        {
            kikutanType
        }: AnkiConfig = {}
    ) {
        this.kikutanType = kikutanType

    }
    private async sevenZipWorker(args: SevenZipWorkerArguments): Promise<Array<File>> {
        return new Promise<any>(async (resolve, reject) => {
            const worker = new Worker(new URL('./worker.ts', import.meta.url));
            worker.postMessage(args);
            worker.onmessage = (result) => {
                if (result.data instanceof Error) {
                    reject(result.data.message)
                    return
                }
                if (!(result.data instanceof Array)) {
                    reject("unknown return type")
                    return
                }
                resolve(result.data)

            };
        })
    }
    async loadApkFile(file: File) {
        return new Promise<void>(async (resolve, reject) => {

            const unzippedFiles = await this.sevenZipWorker({
                file: file,
                args: ["x", file.name],
                filesToUnzip: [
                    "res/raw/app_redux_json_android_basic.json",
                    "res/raw/app_redux_json_android_advanced.json",
                    "res/raw/app_redux_json_android_super.json"
                ]
            })

            try {
                this.kikutanWords.basic = JSON.parse(await unzippedFiles[0].text()).words;
                this.kikutanWords.advanced = JSON.parse(await unzippedFiles[1].text()).words;
                this.kikutanWords.super = JSON.parse(await unzippedFiles[2].text()).words;
                console.log(`Extracted content`);
                resolve()
            } catch (error) {
                reject(`Error extracting content: ${error}`);

            }


            //anki.audioFileFS.nameTable.forEach((e)=>console.log(e.name))
            // 例: 仮想ファイルシステム内のファイルを読み込む


        })
    }
    
    async loadAudioZipFile(files: FileList) {
        return new Promise<void>(async (resolve, reject) => {
            const persistWordsStoreFile = Array.from(files).find((file) => file.name == "persist-wordsStore")
            const audioZipFile = Array.from(files).find((file) => file.name == `${this.kikutanType}.zip`)
            if (typeof audioZipFile == "undefined" || typeof persistWordsStoreFile == "undefined") {
                reject(`"${this.kikutanType}.zip" or "persist-wordsStore" not found`)
                return
            }

            const persistWordsStore = JSON.parse(JSON.parse(await persistWordsStoreFile.text()).downloadedFiles)

            const unzippedFiles = await this.sevenZipWorker({
                file: audioZipFile,
                args: ["e", audioZipFile.name],
                filesToUnzip: "all"
            })

            
            const MissingFiles:Array<string>=[];

            Object.values(persistWordsStore).forEach((object: any, index) => {
                var day = Number((<string>object.local).match(/(?<=day-)[0-9]+(?=-)/)?.[0]);
                if (!(this.weekRange[0] * 7 - 6 <= day && day <= this.weekRange[1] * 7)) {
                    return
                }

                
                var localFileName = `${((<string>object.local).match(this.reg)??[])[0]}`
                var remoteFileName = `_${((<string>object.remote).match(this.reg)??[])[0]}`
    
                var file=unzippedFiles.find((file) => (file.name.match(this.reg)??[])[0] == localFileName)
                if (typeof file == "undefined") {
                    MissingFiles.push(localFileName)
                    return
                }
                this.audioFiles.push(new File([file], remoteFileName, { type: file.type }))
                console.log(`${localFileName} > ${remoteFileName}`)
            })
            if (MissingFiles.length > 0) {
                reject(`${this.kikutanType}.zipの中の以下のファイルが不足しています "\n ${MissingFiles.join(",\n")}"`)
                return
            }



            console.log(persistWordsStore)
            resolve()
        })

    }

    private generateID() {
        this.idCount++
        return this.idDate.getTime() + this.idCount
    }

    async exportAnkiDeck() {
        return new Promise<File>(async (resolve, reject) => {
            const fields = [
                { name: 'id' },
                { name: 'word' },
                { name: 'meaning' },
                { name: 'pronounce' },
                { name: 'word-audio' },
                { name: 'meaning-audio' },

                { name: 'phrase1-t0' },
                { name: 'phrase1-t1' },
                { name: 'phrase1-t2' },
                { name: 'phrase1-audio' },

                { name: 'phrase1-translated-t0' },
                { name: 'phrase1-translated-t1' },
                { name: 'phrase1-translated-t2' },


                { name: 'phrase2-t0' },
                { name: 'phrase2-t1' },
                { name: 'phrase2-t2' },
                { name: 'phrase2-audio' },

                { name: 'phrase2-translated-t0' },
                { name: 'phrase2-translated-t1' },
                { name: 'phrase2-translated-t2' },

                { name: 'sentence-t0' },
                { name: 'sentence-t1' },
                { name: 'sentence-t2' },
                { name: 'sentence-audio' },

                { name: 'sentence-translated-t0' },
                { name: 'sentence-translated-t1' },
                { name: 'sentence-translated-t2' },

            ]

            const card = new Card()
            card.setCss(`
            @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap');
            *{
                font-family: "Noto Sans JP", sans-serif;
                font-optical-sizing: auto;
                font-weight: 400;
                font-style: normal;
            }
            .word{
                margin: 8px 0;
                font-weight: 700;
            }

            `).setTemplates([
                {
                    name: '{{id}}',
                    qfmt: `
                [sound:{{sentence-audio}}] {{sentence-t0}} <span style="color:red">{{sentence-t1}}</span> {{sentence-t2}}`,
                    afmt: `
                {{FrontSide}}
                <hr id="answer">
                {{sentence-translated-t0}}<span style="color:red">{{sentence-translated-t1}}</span>{{sentence-translated-t2}}<br>
                <div class="word">
                {{word}} : {{meaning}}
                </div>
                `
                },
            ])

            const model = new Model(card)

            model
                .setName('キクタン')
                .setSticky(true)
                .setFields(fields.map((f, index) => new Field(f.name).setOrd(index)))

            if (typeof this.kikutanWords.advanced == "undefined") {
                return
            }
            var week = 0

            const deckList: Array<Deck> = []
            Object.values(this.kikutanWords.advanced).forEach((word: any, index) => {

                if (index % 112 == 0) {
                    week++

                    if (!(this.weekRange[0] <= week && week <= this.weekRange[1])) {
                        return
                    }

                    const deck = new Deck(`week${week}`)
                    deckList.push(deck)

                    deck.name = `キクタン ${this.kikutanType}::week ${week}`
                    deck.id = this.generateID()
                }
                if (!(this.weekRange[0] <= week && week <= this.weekRange[1])) {
                    return
                }


                const note = new Note(model)
                note
                    .setFieldsValue([
                        word.id,
                        word.word,
                        word.meaning,
                        word.pronounce,
                        "_" + (((<string>word.audioUrl).match(this.reg))??[])[0],
                        "_" + (((<string>word.translatedAudioUrl).match(this.reg))??[])[0],

                        word.phrase.termsArray[0],
                        word.phrase.termsArray[1],
                        word.phrase.termsArray[2],
                        "_" + (((<string>word.phrase.audioUrl).match(this.reg))??[])[0],

                        word.translatedPhrase.termsArray[0],
                        word.translatedPhrase.termsArray[1],
                        word.translatedPhrase.termsArray[2],

                        word.phrase2?.termsArray[0] ?? "",
                        word.phrase2?.termsArray[1] ?? "",
                        word.phrase2?.termsArray[2] ?? "",
                        word.phrase2?("_" + (((<string>word.phrase2.audioUrl).match(this.reg))??[])[0]):"",
                        

                        word.translatedPhrase2?.termsArray[0] ?? "",
                        word.translatedPhrase2?.termsArray[1] ?? "",
                        word.translatedPhrase2?.termsArray[2] ?? "",

                        word.sentence.termsArray[0],
                        word.sentence.termsArray[1],
                        word.sentence.termsArray[2],
                        "_" + (((<string>word.sentence.audioUrl).match(this.reg))??[])[0],

                        word.translatedSentence.termsArray[0],
                        word.translatedSentence.termsArray[1],
                        word.translatedSentence.termsArray[2],
                    ])
                    .setName(word.id)
                    .setId(this.generateID())
                deckList.slice(-1)[0].addNote(note)
                //console.log(`week${week} ${word.word}`)
            })

            const mediaList: Array<Media> = []
            this.audioFiles.forEach(async(file) => {
                console.log(file.name)
                mediaList.push(new Media(await file.arrayBuffer(),file.name))
            })

            const pkg = new Package(deckList, mediaList)
            console.log(pkg)
            const compressedData: any = await pkg.writeToFile()

            const blob = new Blob([compressedData], { type: "application/apkg" });
            const file = new File([blob], `キクタン${this.kikutanType}.apkg`, { type: blob.type })

            resolve(file)
        })
    }

    setKikutanType(type: KikutanType): number {
        this.kikutanType = type
        if (typeof this.kikutanWords[type] == "undefined") {
            throw new Error("kikutan words not loaded")
        }
        return Math.ceil((Object.values(this.kikutanWords[type]).length) / 112)
    }

}
