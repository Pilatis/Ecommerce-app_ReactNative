# 🛒 Ecommerce API Backend

Backend RESTful API desenvolvido com TypeScript, Node.js, Express e Prisma para um sistema de ecommerce completo. Aplicação robusta com autenticação JWT, gerenciamento de produtos, categorias, carrinho de compras e pedidos.

## 📋 Índice

- [Características](#-características)
- [Tecnologias](#-tecnologias)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Configuração](#-configuração)
- [Uso](#-uso)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Documentação da API](#-documentação-da-api)
- [Autenticação](#-autenticação)
- [Banco de Dados](#-banco-de-dados)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Desenvolvimento](#-desenvolvimento)
- [Contribuindo](#-contribuindo)
- [Licença](#-licença)

## ✨ Características

- ✅ Autenticação JWT segura
- ✅ CRUD completo de produtos, categorias, usuários
- ✅ Sistema de carrinho de compras
- ✅ Gerenciamento de pedidos
- ✅ Validação de dados
- ✅ Tratamento de erros centralizado
- ✅ Arquitetura modular e escalável
- ✅ TypeScript para type safety
- ✅ Prisma ORM para gerenciamento de banco de dados
- ✅ Migração de dados do JSON para PostgreSQL

## 🚀 Tecnologias

### Core
- **Node.js** - Runtime JavaScript
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Express** - Framework web minimalista para Node.js

### Banco de Dados
- **PostgreSQL** - Banco de dados relacional
- **Prisma** - ORM moderno e type-safe

### Autenticação & Segurança
- **JWT (jsonwebtoken)** - Autenticação baseada em tokens
- **bcryptjs** - Hash seguro de senhas

### Outras
- **CORS** - Cross-Origin Resource Sharing
- **dotenv** - Gerenciamento de variáveis de ambiente
- **Zod** - Validação de schemas (preparado para uso)

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (v18 ou superior) - [Download](https://nodejs.org/)
- **PostgreSQL** (v12 ou superior) - [Download](https://www.postgresql.org/download/)
- **npm** ou **yarn** - Gerenciador de pacotes
- **Git** - Controle de versão

## 🔧 Instalação

1. **Clone o repositório:**
```bash
git clone <url-do-repositorio>
cd api-mock
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Configure as variáveis de ambiente:**
```bash
# Crie um arquivo .env na raiz do projeto
cp .env.example .env  # Se existir, ou crie manualmente
```

4. **Configure o arquivo `.env`:**
```env
# Database
DATABASE_URL="postgresql://usuario:senha@localhost:5432/ecommerce_db?schema=public"

# JWT
JWT_SECRET="seu-secret-super-seguro-aqui-mude-em-producao"
JWT_EXPIRES_IN="7d"

# Server
PORT=3001
NODE_ENV=development
```

5. **Configure o banco de dados:**
```bash
# Gere o Prisma Client
npm run prisma:generate

# Execute as migrações
npm run prisma:migrate

# (Opcional) Popule o banco com dados iniciais
npm run seed
```

## ⚙️ Configuração

### Variáveis de Ambiente

| Variável | Descrição | Obrigatório | Padrão |
|----------|-----------|-------------|--------|
| `DATABASE_URL` | URL de conexão do PostgreSQL | ✅ Sim | - |
| `JWT_SECRET` | Chave secreta para assinar tokens JWT | ✅ Sim | - |
| `JWT_EXPIRES_IN` | Tempo de expiração do token | ❌ Não | `7d` |
| `PORT` | Porta do servidor | ❌ Não | `3001` |
| `NODE_ENV` | Ambiente de execução | ❌ Não | `development` |

### Configuração do PostgreSQL

1. Crie um banco de dados:
```sql
CREATE DATABASE ecommerce_db;
```

2. Atualize a `DATABASE_URL` no arquivo `.env` com suas credenciais.

## 🏃 Uso

### Modo Desenvolvimento

Inicia o servidor com hot-reload (recomendado para desenvolvimento):
```bash
npm run dev
```

O servidor estará disponível em: `http://localhost:3001`

### Modo Produção

1. Compile o TypeScript:
```bash
npm run build
```

2. Inicie o servidor:
```bash
npm start
```

### Verificar Status

Acesse o endpoint de health check:
```bash
curl http://localhost:3001/api/health
```

## 📁 Estrutura do Projeto

```
api-mock/
├── src/
│   ├── app.ts                 # Configuração do Express
│   ├── server.ts              # Inicialização do servidor
│   ├── routes.ts              # Rotas principais da API
│   │
│   ├── middlewares/           # Middlewares
│   │   ├── auth.ts           # Middleware de autenticação JWT
│   │   └── errorHandler.ts   # Tratamento centralizado de erros
│   │
│   ├── modules/               # Módulos da aplicação
│   │   ├── auth/             # Autenticação (register, login, profile)
│   │   ├── users/            # Gerenciamento de usuários
│   │   ├── products/         # CRUD de produtos
│   │   ├── categories/       # CRUD de categorias
│   │   ├── orders/           # Gerenciamento de pedidos
│   │   └── cart/             # Carrinho de compras
│   │       ├── *.controller.ts  # Controladores (lógica de requisições)
│   │       ├── *.service.ts     # Serviços (lógica de negócio)
│   │       └── *.routes.ts     # Rotas (definição de endpoints)
│   │
│   ├── utils/                 # Utilitários
│   │   └── prisma.ts         # Cliente Prisma singleton
│   │
│   └── types/                 # Tipos TypeScript compartilhados
│       └── index.ts
│
├── prisma/
│   ├── schema.prisma         # Schema do banco de dados
│   ├── seed.ts               # Script de seed/migração de dados
│   └── db.json               # Dados iniciais (JSON)
│
├── dist/                     # Código compilado (TypeScript → JavaScript)
├── .env                      # Variáveis de ambiente (não versionado)
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## 📚 Documentação da API

### Base URL
```
http://localhost:3001/api
```

### 🔐 Autenticação

#### Registrar Usuário
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "João Silva",
  "email": "joao@example.com",
  "phone": "11999999999",
  "password": "senha123"
}
```

**Resposta (201):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "name": "João Silva",
    "email": "joao@example.com",
    "phone": "11999999999",
    "creatAt": "2024-01-01T00:00:00.000Z",
    "updateAt": "2024-01-01T00:00:00.000Z"
  }
}
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "joao@example.com",
  "password": "senha123"
}
```

**Resposta (200):**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "uuid",
      "name": "João Silva",
      "email": "joao@example.com",
      "phone": "11999999999"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

#### Obter Perfil
```http
GET /api/auth/profile
Authorization: Bearer <token>
```

### 👥 Usuários

| Método | Endpoint | Descrição | Autenticação |
|--------|----------|-----------|--------------|
| GET | `/api/users` | Listar todos os usuários | ✅ |
| GET | `/api/users/:id` | Obter usuário por ID | ✅ |
| PUT | `/api/users/:id` | Atualizar usuário | ✅ |
| DELETE | `/api/users/:id` | Deletar usuário | ✅ |

### 📦 Produtos

| Método | Endpoint | Descrição | Autenticação |
|--------|----------|-----------|--------------|
| GET | `/api/products` | Listar produtos (com paginação) | ❌ |
| GET | `/api/products/:id` | Obter produto por ID | ❌ |
| POST | `/api/products` | Criar produto | ✅ |
| PUT | `/api/products/:id` | Atualizar produto | ✅ |
| DELETE | `/api/products/:id` | Deletar produto | ✅ |

**Query Parameters (GET /api/products):**
- `categoryId` - Filtrar por categoria
- `search` - Buscar por título/descrição
- `page` - Número da página (padrão: 1)
- `limit` - Itens por página (padrão: 20)

**Exemplo:**
```http
GET /api/products?categoryId=1&search=notebook&page=1&limit=10
```

### 🏷️ Categorias

| Método | Endpoint | Descrição | Autenticação |
|--------|----------|-----------|--------------|
| GET | `/api/categories` | Listar todas as categorias | ❌ |
| GET | `/api/categories/:id` | Obter categoria por ID | ❌ |
| POST | `/api/categories` | Criar categoria | ✅ |
| PUT | `/api/categories/:id` | Atualizar categoria | ✅ |
| DELETE | `/api/categories/:id` | Deletar categoria | ✅ |

### 🛒 Carrinho

| Método | Endpoint | Descrição | Autenticação |
|--------|----------|-----------|--------------|
| GET | `/api/cart` | Obter carrinho do usuário | ✅ |
| POST | `/api/cart/items` | Adicionar item ao carrinho | ✅ |
| PUT | `/api/cart/items/:itemId` | Atualizar quantidade do item | ✅ |
| DELETE | `/api/cart/items/:itemId` | Remover item do carrinho | ✅ |
| DELETE | `/api/cart` | Limpar carrinho | ✅ |

**Adicionar item ao carrinho:**
```http
POST /api/cart/items
Authorization: Bearer <token>
Content-Type: application/json

{
  "productId": "uuid",
  "quantity": 2
}
```

### 📋 Pedidos

| Método | Endpoint | Descrição | Autenticação |
|--------|----------|-----------|--------------|
| GET | `/api/orders` | Listar pedidos do usuário | ✅ |
| GET | `/api/orders/:id` | Obter pedido por ID | ✅ |
| POST | `/api/orders` | Criar pedido | ✅ |
| PUT | `/api/orders/:id` | Atualizar pedido | ✅ |

**Criar pedido:**
```http
POST /api/orders
Authorization: Bearer <token>
Content-Type: application/json

{
  "status": "pending",
  "total": 199.99,
  "address": "Rua Exemplo, 123",
  "paymentMethod": "credit_card",
  "items": [
    {
      "productId": "uuid",
      "quantity": 2,
      "price": 99.99
    }
  ]
}
```

## 🔑 Autenticação

A maioria das rotas requer autenticação via JWT. Para autenticar suas requisições:

1. Faça login usando `/api/auth/login` para obter o token
2. Inclua o token no header `Authorization`:

```http
Authorization: Bearer <seu-token-jwt>
```

### Exemplo com cURL:
```bash
curl -X GET http://localhost:3001/api/auth/profile \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```

### Exemplo com JavaScript (fetch):
```javascript
fetch('http://localhost:3001/api/auth/profile', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
})
```

## 🗄️ Banco de Dados

### Modelos Principais

- **User** - Usuários do sistema
- **Category** - Categorias de produtos
- **Products** - Produtos do ecommerce
- **Order** - Pedidos realizados
- **OrderItem** - Itens de um pedido
- **Cart** - Carrinho de compras
- **CartItem** - Itens do carrinho

### Migração de Dados

O projeto inclui um script de seed para popular o banco com dados iniciais:

```bash
npm run seed
```

Este script:
- Lê os dados do arquivo `prisma/db.json`
- Cria/atualiza categorias
- Migra produtos e produtos em promoção
- Mapeia corretamente as relações

### Prisma Studio

Visualize e edite dados diretamente no banco:

```bash
npm run prisma:studio
```

Acesse: `http://localhost:5555`

## 📝 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia servidor em modo desenvolvimento com hot-reload |
| `npm run build` | Compila TypeScript para JavaScript |
| `npm start` | Inicia servidor em modo produção |
| `npm run prisma:generate` | Gera o Prisma Client |
| `npm run prisma:migrate` | Executa migrações do banco de dados |
| `npm run prisma:studio` | Abre Prisma Studio (interface visual do banco) |
| `npm run seed` | Popula o banco com dados iniciais |

## 🛠️ Desenvolvimento

### Arquitetura

O projeto segue uma arquitetura modular com separação clara de responsabilidades:

- **Controllers** - Recebem requisições HTTP e retornam respostas
- **Services** - Contêm a lógica de negócio e interação com o banco
- **Routes** - Definem os endpoints e aplicam middlewares
- **Middlewares** - Interceptam requisições (autenticação, validação, tratamento de erros)

### Padrões Utilizados

- **Singleton Pattern** - Cliente Prisma reutilizado
- **Repository Pattern** - Services abstraem acesso ao banco
- **Middleware Pattern** - Autenticação e tratamento de erros
- **Error Handling** - Tratamento centralizado de erros

### Adicionando Novos Módulos

1. Crie a estrutura na pasta `src/modules/novo-modulo/`:
   - `novo-modulo.controller.ts`
   - `novo-modulo.service.ts`
   - `novo-modulo.routes.ts`

2. Adicione as rotas em `src/routes.ts`:
```typescript
import { novoModuloRoutes } from './modules/novo-modulo/novo-modulo.routes';
router.use('/novo-modulo', novoModuloRoutes);
```

3. Atualize o schema do Prisma se necessário

## 🐛 Tratamento de Erros

A API retorna erros em formato padronizado:

```json
{
  "success": false,
  "error": {
    "message": "Mensagem de erro descritiva"
  }
}
```

**Códigos de Status HTTP:**
- `200` - Sucesso
- `201` - Criado com sucesso
- `400` - Erro de validação
- `401` - Não autenticado
- `403` - Sem permissão
- `404` - Recurso não encontrado
- `500` - Erro interno do servidor

## 🧪 Testes

*Em desenvolvimento - Adicionar testes unitários e de integração*

## 🤝 Contribuindo

Contribuições são bem-vindas! Siga estes passos:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Padrões de Código

- Use TypeScript para type safety
- Siga a estrutura de pastas existente
- Adicione comentários quando necessário
- Mantenha funções pequenas e focadas
- Trate erros adequadamente

## 📄 Licença

Este projeto está sob a licença ISC.

## 👤 Autor

*Seu Nome* - [Seu GitHub](https://github.com/seu-usuario)

## 🙏 Agradecimentos

- Comunidade Node.js
- Time do Prisma
- Todos os contribuidores de código aberto

---

⭐ Se este projeto foi útil, considere dar uma estrela no repositório!
