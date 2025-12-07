import { Request, Response, NextFunction } from 'express';
import { categoryService } from './category.service';

export const categoryController = {
  async getAll(_req: Request, res: Response, next: NextFunction) {
    try {
      const categories = await categoryService.getAll();
      res.json({
        success: true,
        data: categories,
      });
    } catch (error) {
      next(error);
    }
  },

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const category = await categoryService.getById(Number(id));
      res.json({
        success: true,
        data: category,
      });
    } catch (error) {
      next(error);
    }
  },

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const category = await categoryService.create(req.body);
      res.status(201).json({
        success: true,
        data: category,
      });
    } catch (error) {
      next(error);
    }
  },

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const category = await categoryService.update(Number(id), req.body);
      res.json({
        success: true,
        data: category,
      });
    } catch (error) {
      next(error);
    }
  },

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      await categoryService.delete(Number(id));
      res.json({
        success: true,
        message: 'Categoria deletada com sucesso',
      });
    } catch (error) {
      next(error);
    }
  },
};

