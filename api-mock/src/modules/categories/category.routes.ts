import { Router } from 'express';
import { categoryController } from './category.controller';
import { authenticate } from '../../middlewares/auth';

const router = Router();

router.get('/', categoryController.getAll);
router.get('/:id', categoryController.getById);
router.post('/', authenticate, categoryController.create);
router.put('/:id', authenticate, categoryController.update);
router.delete('/:id', authenticate, categoryController.delete);

export { router as categoryRoutes };

