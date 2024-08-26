import express from 'express';
import { AuthController } from '../controllers';

const router = express.Router();
const authController = new AuthController();

router.post('/login', authController.login);
router.post('/logout', authController.logout);

export { router as AuthRoutes };
