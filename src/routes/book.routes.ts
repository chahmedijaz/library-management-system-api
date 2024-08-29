import express from 'express';
import { BooksController } from '../controllers';

const router = express.Router();
const booksController = new BooksController();

router.get('/', booksController.index);
router.post('/', booksController.create);
router.put('/:id', booksController.update);
router.delete('/:id', booksController.delete);

export { router as BookRoutes };
