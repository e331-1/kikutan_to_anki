import Database from "sql.js"
import SevenZip, { SevenZipModule } from "7z-wasm";
import fs from 'fs'
import { Package, Deck, Note, Model, Field, Card } from 'anki-apkg-generator'

type KikutanType = "basic" | "advanced" | "super"
type AnkiConfig = {
    kikutanType?: KikutanType
}
var kikutanWords={}
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
        (globalThis as any).kikutanWords=this.kikutanWords

    }
    
    async exportAnkiDeck() {
        const fields = [
            { name: 'Answer' },
            { name: 'Question' },
            { name: 'MyMedia' },
        ]
    
        const card = new Card()
        card.setCss().setTemplates([
            {
                name: 'Card 1',
                qfmt: '{{Question}}<br>{{MyMedia}}',
                afmt: '{{FrontSide}}<hr id="answer">{{Answer}}',
            },
        ])
    
        const model = new Model(card)
    
        model
            .setName('modelName')
            .setSticky(true)
            .setFields(fields.map((f, index) => new Field(f.name).setOrd(index)))
    
        const note = new Note(model)
        note
            .setFieldsValue([
                'Capital of Argentina',
                'Buenos Aires',
                'media',
            ])
            .setTags(['q', 'z'])
            .setName("note1")

        const note2 = new Note(model)
            note2
                .setFieldsValue([
                    'C2apital of Argentina',
                    'Bu2enos Aires',
                    'media',
                ])
                .setTags(['q', 'z'])
                .setId(1745048853425)
                .setName("note2")
    
        const deck = new Deck('deckName')
        deck.addNote(note)
        deck.addNote(note2)
        console.log(deck.notes)
        const pkg = new Package(deck)
        const compressedData: any = await pkg.writeToFile()
        
        const blob = new Blob([compressedData], { type: "application/apkg" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "output.apkg"; // ダウンロードするファイル名を指定
        link.click();
        URL.revokeObjectURL(link.href);
    
        console.log('success')
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