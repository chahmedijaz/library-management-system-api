

import express from 'express';
import { BookRequestsController } from '../controllers';

const router = express.Router();
const bookRequestsController = new BookRequestsController();

router.get('/', bookRequestsController.index);
router.post('/', bookRequestsController.create);
router.put('/:id', bookRequestsController.update);
router.delete('/:id', bookRequestsController.delete);

export { router as BookRequestRoutes };
