import { Request, Response, NextFunction } from 'express';
import { orderService } from './order.service';

export const orderController = {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = (req as any).userId;
      const orders = await orderService.getAll(userId);
      res.json({
        success: true,
        data: orders,
      });
    } catch (error) {
      next(error);
    }
  },

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const userId = (req as any).userId;
      const order = await orderService.getById(id, userId);
      res.json({
        success: true,
        data: order,
      });
    } catch (error) {
      next(error);
    }
  },

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = (req as any).userId;
      const order = await orderService.create(userId, req.body);
      res.status(201).json({
        success: true,
        data: order,
      });
    } catch (error) {
      next(error);
    }
  },

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const userId = (req as any).userId;
      const order = await orderService.update(id, userId, req.body);
      res.json({
        success: true,
        data: order,
      });
    } catch (error) {
      next(error);
    }
  },
};

