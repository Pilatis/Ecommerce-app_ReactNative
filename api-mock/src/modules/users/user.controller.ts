import { Request, Response, NextFunction } from 'express';
import { userService } from './user.service';

export const userController = {
  async getAll(_req: Request, res: Response, next: NextFunction) {
    try {
      const users = await userService.getAll();
      res.json({
        success: true,
        data: users,
      });
    } catch (error) {
      next(error);
    }
  },

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const user = await userService.getById(id);
      res.json({
        success: true,
        data: user,
      });
    } catch (error) {
      next(error);
    }
  },

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const userId = (req as any).userId;
      const user = await userService.update(id, req.body, userId);
      res.json({
        success: true,
        data: user,
      });
    } catch (error) {
      next(error);
    }
  },

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const userId = (req as any).userId;
      await userService.delete(id, userId);
      res.json({
        success: true,
        message: 'Usuário deletado com sucesso',
      });
    } catch (error) {
      next(error);
    }
  },
};

