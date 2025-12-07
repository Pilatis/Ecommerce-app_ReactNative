import { Request, Response, NextFunction } from 'express';
import { productService } from './product.service';

export const productController = {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const { categoryId, search, page, limit } = req.query;
      const products = await productService.getAll({
        categoryId: categoryId ? Number(categoryId) : undefined,
        search: search as string,
        page: page ? Number(page) : 1,
        limit: limit ? Number(limit) : 20,
      });
      res.json({
        success: true,
        data: products,
      });
    } catch (error) {
      next(error);
    }
  },

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const product = await productService.getById(id);
      res.json({
        success: true,
        data: product,
      });
    } catch (error) {
      next(error);
    }
  },

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const product = await productService.create(req.body);
      res.status(201).json({
        success: true,
        data: product,
      });
    } catch (error) {
      next(error);
    }
  },

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const product = await productService.update(id, req.body);
      res.json({
        success: true,
        data: product,
      });
    } catch (error) {
      next(error);
    }
  },

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      await productService.delete(id);
      res.json({
        success: true,
        message: 'Produto deletado com sucesso',
      });
    } catch (error) {
      next(error);
    }
  },
};

