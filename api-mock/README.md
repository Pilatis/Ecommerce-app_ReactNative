# Backend API - Ecommerce

Backend consistente desenvolvido com TypeScript, Node.js, Express e Prisma.

## 🚀 Tecnologias

- **Node.js** - Runtime JavaScript
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Express** - Framework web para Node.js
- **Prisma** - ORM moderno para TypeScript
- **PostgreSQL** - Banco de dados relacional
- **JWT** - Autenticação baseada em tokens
- **bcryptjs** - Hash de senhas

## 📋 Pré-requisitos

- Node.js (v18 ou superior)
- PostgreSQL (v12 ou superior)
- npm ou yarn

## 🔧 Instalação

1. Instale as dependências:
```bash
npm install
```

2. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas configurações:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/ecommerce_db?schema=public"
JWT_SECRET="your-super-secret-jwt-key"
PORT=3001
NODE_ENV=development
```

3. Configure o banco de dados:
```bash
# Gerar o Prisma Client
npm run prisma:generate

# Executar as migrações
npm run prisma:migrate
```

## 🏃 Executando

### Modo Desenvolvimento
```bash
npm run dev
```

### Modo Produção
```bash
npm run build
npm start
```

## 📚 Estrutura do Projeto

```
src/
├── app.ts                 # Configuração do Express
├── server.ts              # Inicialização do servidor
├── routes.ts              # Rotas principais
├── middlewares/           # Middlewares (auth, errorHandler)
├── modules/               # Módulos da aplicação
│   ├── auth/             # Autenticação
│   ├── users/            # Usuários
│   ├── products/         # Produtos
│   ├── categories/       # Categorias
│   ├── orders/           # Pedidos
│   └── cart/             # Carrinho
├── utils/                # Utilitários
└── types/                # Tipos TypeScript
```

## 🔐 Rotas da API

### Autenticação
- `POST /api/auth/register` - Registrar novo usuário
- `POST /api/auth/login` - Login
- `GET /api/auth/profile` - Obter perfil (requer autenticação)

### Usuários
- `GET /api/users` - Listar usuários (requer autenticação)
- `GET /api/users/:id` - Obter usuário por ID (requer autenticação)
- `PUT /api/users/:id` - Atualizar usuário (requer autenticação)
- `DELETE /api/users/:id` - Deletar usuário (requer autenticação)

### Produtos
- `GET /api/products` - Listar produtos (com paginação e filtros)
- `GET /api/products/:id` - Obter produto por ID
- `POST /api/products` - Criar produto (requer autenticação)
- `PUT /api/products/:id` - Atualizar produto (requer autenticação)
- `DELETE /api/products/:id` - Deletar produto (requer autenticação)

### Categorias
- `GET /api/categories` - Listar categorias
- `GET /api/categories/:id` - Obter categoria por ID
- `POST /api/categories` - Criar categoria (requer autenticação)
- `PUT /api/categories/:id` - Atualizar categoria (requer autenticação)
- `DELETE /api/categories/:id` - Deletar categoria (requer autenticação)

### Pedidos
- `GET /api/orders` - Listar pedidos do usuário (requer autenticação)
- `GET /api/orders/:id` - Obter pedido por ID (requer autenticação)
- `POST /api/orders` - Criar pedido (requer autenticação)
- `PUT /api/orders/:id` - Atualizar pedido (requer autenticação)

### Carrinho
- `GET /api/cart` - Obter carrinho (requer autenticação)
- `POST /api/cart/items` - Adicionar item ao carrinho (requer autenticação)
- `PUT /api/cart/items/:itemId` - Atualizar item do carrinho (requer autenticação)
- `DELETE /api/cart/items/:itemId` - Remover item do carrinho (requer autenticação)
- `DELETE /api/cart` - Limpar carrinho (requer autenticação)

## 🔑 Autenticação

A maioria das rotas requer autenticação via JWT. Para autenticar, inclua o token no header:

```
Authorization: Bearer <seu-token-jwt>
```

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor em modo desenvolvimento com hot-reload
- `npm run build` - Compila o TypeScript para JavaScript
- `npm start` - Inicia o servidor em modo produção
- `npm run prisma:generate` - Gera o Prisma Client
- `npm run prisma:migrate` - Executa as migrações do banco de dados
- `npm run prisma:studio` - Abre o Prisma Studio para visualizar o banco

## 🛠️ Desenvolvimento

O projeto utiliza uma arquitetura modular com separação de responsabilidades:

- **Controllers**: Recebem requisições e retornam respostas
- **Services**: Contêm a lógica de negócio
- **Routes**: Definem as rotas e middlewares
- **Middlewares**: Interceptam requisições (auth, validação, etc)

## 📄 Licença

ISC

