
# 💼 Accounting System

A robust, full-stack accounting software system designed to manage finances, payroll, inventory, and compliance for multi-entity businesses. Built with **Node.js**, **React**, **PostgreSQL**, and **Sequelize ORM**.

---

## 🚀 Features

- 🧾 **Double-entry Accounting** (Journals, Vouchers, Ledgers)
- 💰 **Sales & Receivables** (Invoices, Customers)
- 📦 **Purchases & Payables** (Bills, Suppliers)
- 🏦 **Banking & Reconciliation**
- 📊 **Financial Reports & Charts**
- 👩‍💼 **Payroll & HR Module**
- 📦 **Inventory Tracking**
- ✅ **Audit Logs & Compliance**
- 🔐 **Role-Based Access Control (RBAC)**

---

## 🛠️ Tech Stack

| Layer       | Technology                         |
|-------------|-------------------------------------|
| Frontend    | React.js, TypeScript, Chart.js      |
| Backend     | Node.js, Express.js, TypeScript     |
| ORM         | Sequelize                           |
| Database    | PostgreSQL                          |
| Auth        | JWT (JSON Web Tokens)               |
| Logs        | Winston                             |
| DevOps      | Docker, GitHub Actions              |

See: [REQUIREMENTS.md](./REQUIREMENTS.md) for a full toolchain reference.  
See: [ERD.md](./ERD.md) for full data modeling.

---

## 🧰 Project Structure

```
accounting-system/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   └── app.ts
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── main.tsx
├── .env
├── docker-compose.yml
├── ERD.md
├── REQUIREMENTS.md
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-org/accounting-system.git
cd accounting-system
```

### 2. Environment & Dependencies

```bash
# Setup Node
nvm install 18
npm install

# PostgreSQL (macOS)
brew install postgresql
pg_ctl -D /usr/local/var/postgres start
```

### 3. Configure `.env` File

```env
PORT=3000
DATABASE_URL=postgres://user:pass@localhost:5432/accounting
JWT_SECRET=your-secret
```

### 4. Run the App

```bash
# Start Backend
cd backend
npx sequelize db:migrate
npm run dev

# Start Frontend
cd ../frontend
npm run dev
```

---

## 🧪 Testing

```bash
npm run test           # Unit tests
npm run lint           # Code linting
```

---

## 🐳 Docker Support

```bash
docker-compose up --build
```

---

## 📎 Useful Commands

```bash
# Generate a new Sequelize model
npx sequelize-cli model:generate --name Account --attributes name:string,code:string

# Create DB migration
npx sequelize-cli db:migrate

# Rollback last migration
npx sequelize-cli db:migrate:undo
```

---

## 📜 License

MIT License © 2025 Your Company

> Built with ❤️ to support scalable, compliant, and modern financial systems.
