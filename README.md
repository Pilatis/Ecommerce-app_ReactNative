# 🛒 Ecommerce App

Aplicação full stack de ecommerce com React Native (Expo) no frontend e Node.js/Express no backend.

## 🚀 Tecnologias

### Backend
- Node.js + TypeScript + Express
- PostgreSQL + Prisma ORM
- JWT Authentication

### Frontend
- React Native + Expo
- TypeScript
- Context API

## 📋 Pré-requisitos

- Node.js (v18+)
- PostgreSQL (v12+)
- npm ou yarn

## 🔧 Instalação Rápida

### 1. Clone o repositório
```bash
git clone <url-do-repositorio>
cd ecommerce-app
```

### 2. Backend
```bash
cd api-mock
npm install

# Configure o .env
cp .env.example .env  # Edite com suas credenciais

# Configure o banco
npm run prisma:generate
npm run prisma:migrate
npm run seed  # Opcional: dados iniciais
```

### 3. Frontend
```bash
cd ../mobile
npm install
```

## ⚙️ Configuração

### Backend (.env)
```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/ecommerce_db"
JWT_SECRET="seu-secret-aqui"
PORT=3001
```

### Frontend
Configure a URL da API em `mobile/src/providers/ApiProvider.tsx`:
- Android Emulator: `http://10.0.2.2:3001`
- iOS Simulator: `http://localhost:3001`
- Dispositivo físico: `http://SEU_IP:3001`

## 🏃 Executando

### Backend
```bash
cd api-mock
npm run dev
```

### Frontend
```bash
cd mobile
npm start
```

## 📁 Estrutura

```
ecommerce-app/
├── api-mock/          # Backend API
└── mobile/            # Frontend Mobile
```

## 📚 API Endpoints

- `POST /api/auth/register` - Registrar usuário
- `POST /api/auth/login` - Login
- `GET /api/products` - Listar produtos
- `GET /api/categories` - Listar categorias
- `GET /api/cart` - Carrinho (auth)
- `POST /api/orders` - Criar pedido (auth)

Base URL: `http://localhost:3001/api`

## 📝 Scripts Principais

**Backend:**
- `npm run dev` - Desenvolvimento
- `npm run build` - Build produção
- `npm run seed` - Popular banco

**Frontend:**
- `npm start` - Iniciar Expo
- `npm run android` - Android
- `npm run ios` - iOS

## 📄 Licença

ISC

---

⭐ Se este projeto foi útil, considere dar uma estrela!
