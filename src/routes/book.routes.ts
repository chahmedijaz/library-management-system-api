import express from 'express';
import { BooksController } from '../controllers';

const router = express.Router();
const booksController = new BooksController();

router.get('/', booksController.index);
router.post('/create', booksController.create);

export { router as BookRoutes };
