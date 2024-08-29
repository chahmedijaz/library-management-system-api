import express from 'express';
import { LibrariesController } from '../controllers';

const router = express.Router();
const librariesController = new LibrariesController();

router.get('/', librariesController.index);
router.post('/', librariesController.create);
router.put('/:id', librariesController.update);
router.delete('/:id', librariesController.delete);

export { router as LibraryRoutes };
