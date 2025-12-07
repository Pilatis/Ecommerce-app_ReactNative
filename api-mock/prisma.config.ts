import { defineConfig, env } from '@prisma/config';

export default defineConfig({
  datasource: {
    url: 'postgresql://postgres:postgreadmin@localhost:5432/ecommerce_db',
  },
});
