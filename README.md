# Phimart-client

**Phimart-client** is the frontend application for **Phimart** — an e-commerce storefront UI.  
This repository contains the client-side code for browsing products, viewing product details, managing a shopping cart, and performing a client-side checkout flow (backend integration required for payments, orders, and authentication).

This README reflects the actual technologies used in the project (from `package.json`) and lists the frontend features and basic developer instructions.

---

## 📚 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Demo](#demo)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Install & Run](#install--run)
  - [Build](#build)
- [Project Structure (approx.)](#project-structure-approx)
- [How to Use the App](#how-to-use-the-app)
- [Contributing](#contributing)
- [License & Contact](#license--contact)

---

## ✨ Features

This frontend focuses on essential e-commerce functionality:

- Product catalog (listing by category / featured)
- Product detail pages with images, description, price, variants
- Search and basic filtering (category, price)
- Shopping cart: add/remove items, update quantities
- Checkout UI (collects shipping/billing info) — requires backend to process orders/payments
- Responsive layout for desktop and mobile
- Reusable UI components and simple client-side form validation
- Basic accessibility considerations and keyboard-navigable controls

> **Note:** Authentication, payment processing, order persistence, and any server-side logic must be connected via an API — this UI provides only the client-side screens and flows.

---

## 🧩 Tech Stack

Technologies used in this repository (from `package.json`):

- React
- Vite (build & dev server)
- Tailwind CSS
- DaisyUI
- Axios
- React Router
- react-hook-form
- Swiper
- react-icons
- ESLint
- Type definitions: `@types/react`, `@types/react-dom`

---

## 🚀 Demo

If deployed, add your URL here:

- **Live Site:** https://phimart-client-khaki.vercel.app/

You can also include screenshots in a `docs/` folder or the repo root.

---

## 🧰 Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- npm, yarn, or pnpm

### Install & Run

```bash
git clone https://github.com/saif-dev-19/Phimart-client.git
cd Phimart-client
npm install
npm run dev
