declare module "anki-apkg-export" {
    export interface Note {
        id?: number;
        guid?: string;
        fields: string[];
        tags?: string[];
    }

    export interface Media {
        filename: string;
        data: Buffer | string;
    }

    export class AnkiExport {
        constructor(deckName: string);

        addNote(note: Note): Promise<void>;
        addMedia(media: Media): void;
        save(): Promise<Buffer>;
    }
}