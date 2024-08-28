import { Document } from "mongoose";

export interface ISessionObject {
    currentUser: Document,
    currentLibrary: Document,
} 