import { IBook } from "../types/entities";

export class Book implements IBook {
    constructor(
        public title: string,
        public authorName: string,
        public quantity: string
    ) {}
};
