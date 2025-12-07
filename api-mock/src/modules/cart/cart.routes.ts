import { Router } from 'express';
import { cartController } from './cart.controller';
import { authenticate } from '../../middlewares/auth';

const router = Router();

router.get('/', authenticate, cartController.getCart);
router.post('/items', authenticate, cartController.addItem);
router.put('/items/:itemId', authenticate, cartController.updateItem);
router.delete('/items/:itemId', authenticate, cartController.removeItem);
router.delete('/', authenticate, cartController.clearCart);

export { router as cartRoutes };

