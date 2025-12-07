import { prisma } from '../../utils/prisma';
import { AppError } from '../../middlewares/errorHandler';

interface GetProductsParams {
  categoryId?: number;
  search?: string;
  page?: number;
  limit?: number;
}

export const productService = {
  async getAll(params: GetProductsParams) {
    const { categoryId, search, page = 1, limit = 20 } = params;
    const skip = (page - 1) * limit;

    const where: any = {};

    if (categoryId) {
      where.categoryId = categoryId;
    }

    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
      ];
    }

    const [products, total] = await Promise.all([
      prisma.products.findMany({
        where,
        include: {
          category: true,
        },
        skip,
        take: limit,
        orderBy: {
          id: 'desc',
        },
      }),
      prisma.products.count({ where }),
    ]);

    return {
      data: products,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  },

  async getById(id: string) {
    const product = await prisma.products.findUnique({
      where: { id },
      include: {
        category: true,
      },
    });

    if (!product) {
      throw new AppError('Produto não encontrado', 404);
    }

    return product;
  },

  async create(data: any) {
    const { categoryId, ...productData } = data;

    // Verificar se a categoria existe
    const category = await prisma.category.findUnique({
      where: { id: categoryId },
    });

    if (!category) {
      throw new AppError('Categoria não encontrada', 404);
    }

    const product = await prisma.products.create({
      data: {
        ...productData,
        categoryId,
      },
      include: {
        category: true,
      },
    });

    return product;
  },

  async update(id: string, data: any) {
    const product = await prisma.products.findUnique({
      where: { id },
    });

    if (!product) {
      throw new AppError('Produto não encontrado', 404);
    }

    const { categoryId, ...updateData } = data;

    if (categoryId) {
      const category = await prisma.category.findUnique({
        where: { id: categoryId },
      });

      if (!category) {
        throw new AppError('Categoria não encontrada', 404);
      }
    }

    const updatedProduct = await prisma.products.update({
      where: { id },
      data: {
        ...updateData,
        ...(categoryId && { categoryId }),
      },
      include: {
        category: true,
      },
    });

    return updatedProduct;
  },

  async delete(id: string) {
    const product = await prisma.products.findUnique({
      where: { id },
    });

    if (!product) {
      throw new AppError('Produto não encontrado', 404);
    }

    await prisma.products.delete({
      where: { id },
    });
  },
};

