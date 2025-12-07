import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from '../../utils/prisma';
import { AppError } from '../../middlewares/errorHandler';

interface RegisterData {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export const authService = {
  async register(data: RegisterData) {
    const { name, email, phone, password } = data;

    // Verificar se usuário já existe
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ email }, { phone }],
      },
    });

    if (existingUser) {
      throw new AppError('Email ou telefone já cadastrado', 400);
    }

    // Hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Criar usuário
    const user = await prisma.user.create({
      data: {
        name,
        email,
        phone,
        password: hashedPassword,
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        creatAt: true,
        updateAt: true,
      },
    });

    return user;
  },

  async login(email: string, password: string) {
    // Buscar usuário
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new AppError('Email ou senha inválidos', 401);
    }

    // Verificar senha
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      throw new AppError('Email ou senha inválidos', 401);
    }

    // Gerar token
    const secret = process.env.JWT_SECRET;
    
    if (!secret) {
      throw new AppError('Configuração de autenticação inválida', 500);
    }

    const token = jwt.sign({ userId: user.id }, secret, {
      expiresIn: process.env.JWT_EXPIRES_IN || '7d',
    });

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
      },
      token,
    };
  },

  async getProfile(userId: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        creatAt: true,
        updateAt: true,
      },
    });

    if (!user) {
      throw new AppError('Usuário não encontrado', 404);
    }

    return user;
  },
};

