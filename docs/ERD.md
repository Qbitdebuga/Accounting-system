
# 📘 Accounting System - Entity Relationship Diagram (ERD)

This document provides a complete ERD representation for the accounting software, including database structure, relationships, and visual flows.

---

## 🔗 Entity Relationships

```mermaid
erDiagram
    companies ||--o{ users : "has"
    companies ||--o{ accounts : "has"
    companies ||--o{ customers : "has"
    companies ||--o{ suppliers : "has"
    companies ||--o{ employees : "has"

    roles ||--o{ users : "assigned"
    permissions ||--o{ role_permissions : "granted"
    roles ||--o{ role_permissions : "grants"

    accounts ||--o{ journal_lines : "affected_by"
    journal_entries ||--o{ journal_lines : "contains"
    journal_entries }|--|| vouchers : "references"

    customers ||--o{ invoices : "receives"
    invoices ||--o{ invoice_lines : "contains"
    invoice_lines }o--|| products : "references"

    suppliers ||--o{ bills : "provides"
    bills ||--o{ bill_lines : "contains"
    bill_lines }o--|| products : "references"

    employees ||--o{ payroll_transactions : "has"
    payroll_transactions }|--|| journal_entries : "recorded_in"

    banks ||--o{ cheques : "issues"
    cheques }|--|| vouchers : "authorized_by"

    products ||--o{ inventory_movements : "tracked_in"
    warehouses ||--o{ inventory_movements : "stored_at"
```

---

## 🧱 Table Highlights

### 1. Core Entities

- **companies**: Stores organization metadata.
- **users**: System users with roles.
- **roles & permissions**: Role-based access control.

### 2. Accounting Foundation

- **accounts**: Chart of accounts structure.
- **journal_entries**: Financial transactions.
- **journal_lines**: Line-item details of journal entries.

### 3. Tax Management

- **tax_codes**: Tax definitions (rate, type, account link).

### 4. Sales & Receivables

- **customers**: Clients for invoicing.
- **invoices** & **invoice_lines**: Sales billing and line items.

### 5. Purchases & Payables

- **suppliers**: Vendor profiles.
- **bills** & **bill_lines**: Purchase recording.

### 6. Banking & Payments

- **banks**: Bank info with currency and branch.
- **payments** & **cheques**: Transaction and cheque tracking.

### 7. Vouchers

- **vouchers** & **voucher_lines**: Central financial document controller.

### 8. Inventory

- **products**: SKU-based items.
- **warehouses**: Physical storage.
- **inventory_movements**: Transaction logs.

### 9. Payroll & HR

- **employees**, **departments**, **payroll_transactions**.

### 10. Audit & Compliance

- **audit_logs**: Tracks user actions.
- **bank_reconciliation**: Monthly closing checks.

---

## 🔄 Money Flow Examples

### 💰 Sales Transaction
```text
Customer → Invoice → Journal Entry
  - Debit: Accounts Receivable
  - Credit: Sales Revenue
```

### 🧾 Purchase Transaction
```text
Supplier → Bill → Journal Entry
  - Debit: Inventory or Expense
  - Credit: Accounts Payable
```

### 👥 Payroll Transaction
```text
Employee → Payroll → Journal Entry
  - Debit: Salary Expense
  - Credit: Bank / Cash
```

---

## 🔁 Visual Cheatsheet

```mermaid
flowchart TD
    A[Customer Order] --> B(Invoice)
    B --> C{Journal Entry}
    C --> D[Debit: Accounts Receivable]
    C --> E[Credit: Sales]

    F[Supplier Delivery] --> G(Bill)
    G --> H{Journal Entry}
    H --> I[Debit: Inventory or Expense]
    H --> J[Credit: Accounts Payable]

    K[Payroll Processed] --> L(Payroll)
    L --> M{Journal Entry}
    M --> N[Debit: Salary Expense]
    M --> O[Credit: Cash/Bank]
```

---

> Generated with ❤️ for system clarity and modular scalability.
