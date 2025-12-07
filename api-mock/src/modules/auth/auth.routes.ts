import { Router } from 'express';
import { authController } from './auth.controller';
import { authenticate } from '../../middlewares/auth';

const router = Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/profile', authenticate, authController.getProfile);

export { router as authRoutes };

