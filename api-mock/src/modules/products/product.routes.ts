import { Router } from 'express';
import { productController } from './product.controller';
import { authenticate } from '../../middlewares/auth';

const router = Router();

router.get('/', productController.getAll);
router.get('/:id', productController.getById);
router.post('/', authenticate, productController.create);
router.put('/:id', authenticate, productController.update);
router.delete('/:id', authenticate, productController.delete);

export { router as productRoutes };

