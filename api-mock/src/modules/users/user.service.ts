import { prisma } from '../../utils/prisma';
import { AppError } from '../../middlewares/errorHandler';

export const userService = {
  async getAll() {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        creatAt: true,
        updateAt: true,
      },
    });
    return users;
  },

  async getById(id: string) {
    const user = await prisma.user.findUnique({
      where: { id },
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

  async update(id: string, data: any, userId: string) {
    // Verificar se o usuário está tentando atualizar seu próprio perfil
    if (id !== userId) {
      throw new AppError('Você não tem permissão para atualizar este usuário', 403);
    }

    const user = await prisma.user.update({
      where: { id },
      data: {
        ...(data.name && { name: data.name }),
        ...(data.email && { email: data.email }),
        ...(data.phone && { phone: data.phone }),
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

  async delete(id: string, userId: string) {
    // Verificar se o usuário está tentando deletar seu próprio perfil
    if (id !== userId) {
      throw new AppError('Você não tem permissão para deletar este usuário', 403);
    }

    await prisma.user.delete({
      where: { id },
    });
  },
};

