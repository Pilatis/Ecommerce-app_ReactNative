import { Request, Response, NextFunction } from 'express';
import { cartService } from './cart.service';

export const cartController = {
  async getCart(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = (req as any).userId;
      const cart = await cartService.getCart(userId);
      res.json({
        success: true,
        data: cart,
      });
    } catch (error) {
      next(error);
    }
  },

  async addItem(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = (req as any).userId;
      const cart = await cartService.addItem(userId, req.body);
      res.json({
        success: true,
        data: cart,
      });
    } catch (error) {
      next(error);
    }
  },

  async updateItem(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = (req as any).userId;
      const { itemId } = req.params;
      const cart = await cartService.updateItem(userId, itemId, req.body);
      res.json({
        success: true,
        data: cart,
      });
    } catch (error) {
      next(error);
    }
  },

  async removeItem(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = (req as any).userId;
      const { itemId } = req.params;
      await cartService.removeItem(userId, itemId);
      res.json({
        success: true,
        message: 'Item removido do carrinho',
      });
    } catch (error) {
      next(error);
    }
  },

  async clearCart(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = (req as any).userId;
      await cartService.clearCart(userId);
      res.json({
        success: true,
        message: 'Carrinho limpo',
      });
    } catch (error) {
      next(error);
    }
  },
};

