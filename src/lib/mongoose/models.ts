import mongoose from "mongoose";
import { bookRequestSchema, bookSchema, librarySchema, userSchema } from "./schema";

const BookModel = mongoose.model('Book', bookSchema);
const BookRequestModel = mongoose.model('BookRequest', bookRequestSchema);
const UserModel = mongoose.model('User', userSchema);
const LibraryModel = mongoose.model('Library', librarySchema);

export { BookModel, BookRequestModel, UserModel, LibraryModel };
