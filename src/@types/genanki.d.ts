
declare module "genanki-js" {
    import { Database } from "sql.js";
    export const APKG_SCHEMA: string;
    export class Model {
        constructor(config: {
            name: string;
            id: string;
            flds: Array<{ name: string }>;
            req: Array<[number, string, number[]]>;
            tmpls: Array<{
                name: string;
                qfmt: string;
                afmt: string;
            }>;
        });
        note(fields: string[]): object;
    }

    export class Deck {
        constructor(id: number, name: string);
        addNote(note: object): void;
    }

    export class Package {
        db:Database
        media: Array<{ name: string; data: string; filename?: string }>;
        addDeck(deck: Deck): void;
        
        write(db:Database):void

        writeToFile(fileName: string): void;
    }
}