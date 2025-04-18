
# 📦 Accounting System - Tech Stack & Development Requirements

This file documents all the essential languages, frameworks, tools, and extensions required to build and run the accounting system.

---

## 🔧 1. Core Development Stack

| Category          | Technology                    | Purpose                         |
|------------------|-------------------------------|---------------------------------|
| Backend           | Node.js (JavaScript/TS)       | Server-side logic               |
| API Framework     | Express.js                    | RESTful APIs                    |
| Database ORM      | Sequelize                     | PostgreSQL integration          |
| Frontend          | React.js (TypeScript)         | Modern UI framework             |
| Database          | PostgreSQL                    | Relational data store           |

---

## 📘 2. Essential Languages

| Language     | Used For                      | Extensions          |
|--------------|-------------------------------|---------------------|
| JavaScript   | Backend/frontend logic        | `.js`, `.jsx`       |
| TypeScript   | Strong typing                 | `.ts`, `.tsx`       |
| SQL          | Schema, migrations            | `.sql`              |
| HTML5        | Web markup                    | `.html`             |
| CSS3/SASS    | Styling                       | `.css`, `.scss`     |
| Markdown     | Documentation                 | `.md`               |

---

## 💻 3. VS Code Extensions (Recommended)

| Extension         | Purpose                          |
|------------------|----------------------------------|
| ESLint            | Linting JavaScript/TypeScript   |
| Prettier          | Code formatting                 |
| PostgreSQL        | Query tool                      |
| REST Client       | Test endpoints                  |
| DotENV            | `.env` highlighting             |
| GitLens           | Git insights                    |
| Mermaid Preview   | Render ERD diagrams             |
| Docker            | Containerization UI             |

---

## 📦 4. CLI Tools

```bash
npm install -g nodemon sequelize-cli typescript eslint prettier
```

---

## 🌐 5. Frontend Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "axios": "^1.5.0",
  "react-router-dom": "^6.16.0",
  "chart.js": "^4.4.0"
}
```

---

## 🔙 6. Backend Dependencies

```json
{
  "express": "^4.18.2",
  "sequelize": "^6.33.0",
  "pg": "^8.11.3",
  "dotenv": "^16.3.1",
  "jsonwebtoken": "^9.0.2",
  "winston": "^3.10.0"
}
```

---

## 🧪 7. Testing Tools

| Tool              | Purpose                   |
|-------------------|---------------------------|
| Jest              | Unit tests                |
| Supertest         | HTTP API testing          |
| React Testing Lib | React component testing   |
| Postman           | Manual API validation     |

---

## 🚢 8. DevOps Tools

| Tool            | Role                             |
|-----------------|----------------------------------|
| Docker          | Containers                       |
| GitHub Actions  | CI/CD pipelines                  |
| AWS RDS         | PostgreSQL cloud hosting         |
| PM2             | Node process manager             |

---

## 💼 9. Accounting Libraries

| Library         | Purpose                          |
|-----------------|----------------------------------|
| currency.js     | Accurate currency ops            |
| date-fns        | Fiscal date processing           |
| pdf-lib         | PDF generation (invoices, etc.)  |
| tax-calculator  | Tax rules engine                 |

---

## ⚙️ 10. VS Code Project Settings

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "eslint.validate": ["javascript", "typescript"],
  "files.associations": {
    "*.sequelizerc": "javascript"
  },
  "mermaid.editor.fontFamily": "Arial"
}
```

---

## ✅ 11. Setup Checklist

### Node & TypeScript
```bash
nvm install 18
```

### PostgreSQL
```bash
# macOS
brew install postgresql
# Linux
sudo apt-get install postgresql
```

### Start DB & Project
```bash
pg_ctl -D /usr/local/var/postgres start
git clone https://github.com/your-repo/accounting-system.git
cd accounting-system
npm install
```

---

## 🗂️ 12. File Extensions Summary

| Extension | Description                  |
|-----------|------------------------------|
| `.ts`     | TypeScript backend           |
| `.tsx`    | React UI                     |
| `.sql`    | SQL scripts/migrations       |
| `.env`    | Configuration                |
| `.yml`    | CI/CD or container settings  |
| `.ejs`    | Templating (optional)        |

---

> Designed for stability, scalability, and compliance.
