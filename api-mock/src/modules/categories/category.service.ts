import { prisma } from '../../utils/prisma';
import { AppError } from '../../middlewares/errorHandler';

export const categoryService = {
  async getAll() {
    const categories = await prisma.category.findMany({
      include: {
        _count: {
          select: {
            products: true,
          },
        },
      },
    });
    return categories;
  },

  async getById(id: number) {
    const category = await prisma.category.findUnique({
      where: { id },
      include: {
        products: true,
      },
    });

    if (!category) {
      throw new AppError('Categoria não encontrada', 404);
    }

    return category;
  },

  async create(data: { name: string; image?: string }) {
    const category = await prisma.category.create({
      data,
    });
    return category;
  },

  async update(id: number, data: { name?: string; image?: string }) {
    const category = await prisma.category.findUnique({
      where: { id },
    });

    if (!category) {
      throw new AppError('Categoria não encontrada', 404);
    }

    const updatedCategory = await prisma.category.update({
      where: { id },
      data,
    });

    return updatedCategory;
  },

  async delete(id: number) {
    const category = await prisma.category.findUnique({
      where: { id },
    });

    if (!category) {
      throw new AppError('Categoria não encontrada', 404);
    }

    await prisma.category.delete({
      where: { id },
    });
  },
};

