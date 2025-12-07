import { Request, Response, NextFunction } from 'express';
import { authService } from './auth.service';
import { AppError } from '../../middlewares/errorHandler';
import { AuthRequest } from '../../middlewares/auth';

export const authController = {
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email, phone, password } = req.body;

      // Validação básica
      if (!name || !email || !phone || !password) {
        throw new AppError('Todos os campos são obrigatórios', 400);
      }

      if (password.length < 6) {
        throw new AppError('A senha deve ter pelo menos 6 caracteres', 400);
      }

      const user = await authService.register({ name, email, phone, password });
      res.status(201).json({
        success: true,
        data: user,
      });
    } catch (error) {
      next(error);
    }
  },

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;

      // Validação básica
      if (!email || !password) {
        throw new AppError('Email e senha são obrigatórios', 400);
      }

      const result = await authService.login(email, password);
      res.json({
        success: true,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  },

  async getProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const authReq = req as AuthRequest;
      const userId = authReq.userId;
      
      if (!userId) {
        throw new AppError('Usuário não autenticado', 401);
      }
      
      const user = await authService.getProfile(userId);
      res.json({
        success: true,
        data: user,
      });
    } catch (error) {
      next(error);
    }
  },
};

