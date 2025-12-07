import { prisma } from '../../utils/prisma';
import { AppError } from '../../middlewares/errorHandler';

export const cartService = {
  async getCart(userId: string) {
    let cart = await prisma.cart.findUnique({
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
    });

    if (!cart) {
      cart = await prisma.cart.create({
        data: {
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
    }

    return cart;
  },

  async addItem(userId: string, data: { productId: string; quantity: number }) {
    const { productId, quantity } = data;

    // Verificar se o produto existe
    const product = await prisma.products.findUnique({
      where: { id: productId },
    });

    if (!product) {
      throw new AppError('Produto não encontrado', 404);
    }

    // Buscar ou criar carrinho
    let cart = await prisma.cart.findUnique({
      where: { userId },
    });

    if (!cart) {
      cart = await prisma.cart.create({
        data: { userId },
      });
    }

    // Verificar se o item já existe no carrinho
    const existingItem = await prisma.cartItem.findFirst({
      where: {
        cartId: cart.id,
        productId,
      },
    });

    if (existingItem) {
      // Atualizar quantidade
      await prisma.cartItem.update({
        where: { id: existingItem.id },
        data: {
          quantity: existingItem.quantity + quantity,
        },
      });

      const updatedCart = await prisma.cart.findUnique({
        where: { id: cart.id },
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

      return updatedCart;
    }

    // Criar novo item
    await prisma.cartItem.create({
      data: {
        cartId: cart.id,
        productId,
        quantity,
      },
    });

    const updatedCart = await prisma.cart.findUnique({
      where: { id: cart.id },
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

    return updatedCart;
  },

  async updateItem(userId: string, itemId: string, data: { quantity: number }) {
    const cart = await prisma.cart.findUnique({
      where: { userId },
    });

    if (!cart) {
      throw new AppError('Carrinho não encontrado', 404);
    }

    const item = await prisma.cartItem.findFirst({
      where: {
        id: itemId,
        cartId: cart.id,
      },
    });

    if (!item) {
      throw new AppError('Item não encontrado no carrinho', 404);
    }

    await prisma.cartItem.update({
      where: { id: itemId },
      data: {
        quantity: data.quantity,
      },
    });

    const updatedCart = await prisma.cart.findUnique({
      where: { id: cart.id },
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

    return updatedCart;
  },

  async removeItem(userId: string, itemId: string) {
    const cart = await prisma.cart.findUnique({
      where: { userId },
    });

    if (!cart) {
      throw new AppError('Carrinho não encontrado', 404);
    }

    const item = await prisma.cartItem.findFirst({
      where: {
        id: itemId,
        cartId: cart.id,
      },
    });

    if (!item) {
      throw new AppError('Item não encontrado no carrinho', 404);
    }

    await prisma.cartItem.delete({
      where: { id: itemId },
    });
  },

  async clearCart(userId: string) {
    const cart = await prisma.cart.findUnique({
      where: { userId },
    });

    if (!cart) {
      throw new AppError('Carrinho não encontrado', 404);
    }

    await prisma.cartItem.deleteMany({
      where: { cartId: cart.id },
    });
  },
};

