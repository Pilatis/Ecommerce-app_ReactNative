import { prisma } from '../../utils/prisma';
import { AppError } from '../../middlewares/errorHandler';

export const orderService = {
  async getAll(userId: string) {
    const orders = await prisma.order.findMany({
      where: { userId },
      include: {
        items: {
          include: {
            product: {
              include: {
                category: true,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return orders;
  },

  async getById(id: string, userId: string) {
    const order = await prisma.order.findFirst({
      where: {
        id,
        userId,
      },
      include: {
        items: {
          include: {
            product: {
              include: {
                category: true,
              },
            },
          },
        },
      },
    });

    if (!order) {
      throw new AppError('Pedido não encontrado', 404);
    }

    return order;
  },

  async create(userId: string, data: any) {
    const { items, ...orderData } = data;

    const order = await prisma.order.create({
      data: {
        ...orderData,
        userId,
        items: {
          create: items.map((item: any) => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.price,
          })),
        },
      },
      include: {
        items: {
          include: {
            product: {
              include: {
                category: true,
              },
            },
          },
        },
      },
    });

    return order;
  },

  async update(id: string, userId: string, data: any) {
    const order = await prisma.order.findFirst({
      where: {
        id,
        userId,
      },
    });

    if (!order) {
      throw new AppError('Pedido não encontrado', 404);
    }

    const updatedOrder = await prisma.order.update({
      where: { id },
      data,
      include: {
        items: {
          include: {
            product: {
              include: {
                category: true,
              },
            },
          },
        },
      },
    });

    return updatedOrder;
  },
};

