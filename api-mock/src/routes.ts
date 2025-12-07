import { Router } from 'express';
import { userRoutes } from './modules/users/user.routes';
import { productRoutes } from './modules/products/product.routes';
import { categoryRoutes } from './modules/categories/category.routes';
import { orderRoutes } from './modules/orders/order.routes';
import { cartRoutes } from './modules/cart/cart.routes';
import { authRoutes } from './modules/auth/auth.routes';

const router = Router();

// Health check
router.get('/health', (_req, res) => {
  res.json({ status: 'ok', message: 'API está funcionando' });
});

// Routes
router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/categories', categoryRoutes);
router.use('/orders', orderRoutes);
router.use('/cart', cartRoutes);

export { router as routes };

