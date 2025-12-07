import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AppError } from './errorHandler';

export interface AuthRequest extends Request {
  userId?: string;
}

export const authenticate = (
  req: AuthRequest,
  _res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new AppError('Token não fornecido', 401);
    }

    const token = authHeader.substring(7);
    const secret = process.env.JWT_SECRET;

    if (!secret) {
      throw new AppError('Configuração de autenticação inválida', 500);
    }

    try {
      const decoded = jwt.verify(token, secret) as { userId: string };
      
      if (!decoded.userId) {
        throw new AppError('Token inválido', 401);
      }

      req.userId = decoded.userId;
      next();
    } catch (jwtError) {
      if (jwtError instanceof jwt.TokenExpiredError) {
        next(new AppError('Token expirado', 401));
      } else if (jwtError instanceof jwt.JsonWebTokenError) {
        next(new AppError('Token inválido', 401));
      } else if (jwtError instanceof jwt.NotBeforeError) {
        next(new AppError('Token ainda não válido', 401));
      } else {
        next(new AppError('Erro ao validar token', 401));
      }
    }
  } catch (error) {
    if (error instanceof AppError) {
      next(error);
    } else {
      next(new AppError('Erro na autenticação', 401));
    }
  }
};

