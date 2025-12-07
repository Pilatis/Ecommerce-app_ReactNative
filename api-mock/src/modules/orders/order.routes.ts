import { Router } from 'express';
import { orderController } from './order.controller';
import { authenticate } from '../../middlewares/auth';

const router = Router();

router.get('/', authenticate, orderController.getAll);
router.get('/:id', authenticate, orderController.getById);
router.post('/', authenticate, orderController.create);
router.put('/:id', authenticate, orderController.update);

export { router as orderRoutes };

