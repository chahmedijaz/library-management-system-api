import express from 'express';
import { UsersController } from '../controllers';

const router = express.Router();
const usersController = new UsersController();

router.get('/', usersController.index);
router.post('/', usersController.create);
router.put('/:id', usersController.update);
router.delete('/:id', usersController.delete);

export { router as UserRoutes };
