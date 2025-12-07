import { Router } from 'express';
import { userController } from './user.controller';
import { authenticate } from '../../middlewares/auth';

const router = Router();

router.get('/', authenticate, userController.getAll);
router.get('/:id', authenticate, userController.getById);
router.put('/:id', authenticate, userController.update);
router.delete('/:id', authenticate, userController.delete);

export { router as userRoutes };

