import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import * as fs from 'fs';
import * as path from 'path';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL não está definida nas variáveis de ambiente');
}

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

interface CategoryData {
  id: number;
  name: string;
  image?: string;
}

interface ProductData {
  id: number;
  title: string;
  price: number;
  discount?: number;
  description: string;
  images: string[];
  rating?: number;
  numberReviews?: number;
  category: CategoryData;
}

interface JsonData {
  categories: CategoryData[];
  products: ProductData[];
  saleProducts: ProductData[];
}

async function main() {
  console.log('🌱 Iniciando migração de dados...');

  // Ler o arquivo JSON
  const jsonPath = path.join(__dirname, 'db.json');
  const jsonData: JsonData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

  // 1. Criar/Atualizar Categorias
  console.log('📁 Criando categorias...');
  const categoryMap = new Map<number, number>(); // Mapeia ID antigo -> ID novo

  for (const category of jsonData.categories) {
    const existingCategory = await prisma.category.findFirst({
      where: { name: category.name },
    });

    let categoryId: number;

    if (existingCategory) {
      // Atualizar categoria existente
      const updated = await prisma.category.update({
        where: { id: existingCategory.id },
        data: {
          name: category.name,
          image: category.image || null,
        },
      });
      categoryId = updated.id;
      console.log(`  ✓ Categoria atualizada: ${category.name} (ID: ${categoryId})`);
    } else {
      // Criar nova categoria
      const created = await prisma.category.create({
        data: {
          name: category.name,
          image: category.image || null,
        },
      });
      categoryId = created.id;
      console.log(`  ✓ Categoria criada: ${category.name} (ID: ${categoryId})`);
    }

    categoryMap.set(category.id, categoryId);
  }

  // 2. Criar Produtos (de products e saleProducts)
  console.log('\n📦 Criando produtos...');
  const allProducts = [...jsonData.products, ...jsonData.saleProducts];
  let createdCount = 0;
  let updatedCount = 0;
  let skippedCount = 0;

  for (const product of allProducts) {
    try {
      // Verificar se a categoria existe no mapa
      const newCategoryId = categoryMap.get(product.category.id);
      if (!newCategoryId) {
        console.log(`  ⚠ Categoria não encontrada para produto: ${product.title}`);
        skippedCount++;
        continue;
      }

      // Verificar se o produto já existe (por título ou ID antigo)
      const existingProduct = await prisma.products.findFirst({
        where: {
          title: product.title,
        },
      });

      if (existingProduct) {
        // Atualizar produto existente
        await prisma.products.update({
          where: { id: existingProduct.id },
          data: {
            title: product.title,
            price: product.price,
            discount: product.discount || null,
            description: product.description,
            images: product.images,
            rating: product.rating || null,
            numberReviews: product.numberReviews || null,
            categoryId: newCategoryId,
          },
        });
        updatedCount++;
        console.log(`  ↻ Produto atualizado: ${product.title}`);
      } else {
        // Criar novo produto
        await prisma.products.create({
          data: {
            title: product.title,
            price: product.price,
            discount: product.discount || null,
            description: product.description,
            images: product.images,
            rating: product.rating || null,
            numberReviews: product.numberReviews || null,
            categoryId: newCategoryId,
          },
        });
        createdCount++;
        console.log(`  ✓ Produto criado: ${product.title}`);
      }
    } catch (error) {
      console.error(`  ✗ Erro ao processar produto ${product.title}:`, error);
      skippedCount++;
    }
  }

  console.log('\n✅ Migração concluída!');
  console.log(`   - Categorias: ${categoryMap.size}`);
  console.log(`   - Produtos criados: ${createdCount}`);
  console.log(`   - Produtos atualizados: ${updatedCount}`);
  console.log(`   - Produtos ignorados: ${skippedCount}`);
}

main()
  .catch((e) => {
    console.error('❌ Erro na migração:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });

