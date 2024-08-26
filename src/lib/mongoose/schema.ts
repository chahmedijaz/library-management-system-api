import { Schema } from "mongoose";

// Book Schema
export const bookSchema = new Schema({
  title: { type: String, required: true },
  authorName: { type: String, required: true },
  quantity: { type: Number, default: true },
});

// Book Request Schema
export const bookRequestSchema = new Schema({
  book: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
  member: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  requestDate: { type: Date, default: Date.now },
  requestDueDate: { type: Date, required: true },
  status: { type: String, enum: ['submitted', 'completed', 'rejected'], default: 'submitted' },
});

// User Schema
export const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['superAdmin', 'librarian', 'member'] },
  bookRequests: [{ type: Schema.Types.ObjectId, ref: 'BookRequest' }],
});

// Library Schema
export const librarySchema = new Schema({
  name: { type: String, required: true },
  books: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});
