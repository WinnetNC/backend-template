![CI](https://github.com/WinnetNC/backend-template/actions/workflows/backend-ci.yml/badge.svg)

## 🚀 Backend Template

A minimal, scalable backend template built with **Node.js, Express, and TypeScript**.
Designed for clean structure, fast setup, and easy extension.

---

## 📁 Project Structure

```
backend-template/
├── .github/
│   └── workflows/        # CI pipeline
├── src/
│   ├── app.ts            # Express app setup
│   ├── server.ts         # Server entry point
│   │
│   ├── config/
│   │   └── env.ts        # Environment loader
│   │
│   ├── db/
│   │   ├── index.ts
│   │   └── __mocks__/    # Test DB mocks
│   │
│   ├── middleware/
│   │   ├── auth.middleware.ts
│   │   ├── error.middleware.ts
│   │   └── validate.middleware.ts
│   │
│   ├── modules/
│   │   └── example/      # Example feature module
│   │       ├── example.routes.ts
│   │       ├── example.controller.ts
│   │       ├── example.service.ts
│   │       ├── example.schema.ts
│   │       ├── example.test.ts     # Co-located unit test
│   │       └── example.types.ts
│   │
│   ├── services/
│   │   └── auth/
│   │       └── auth.service.ts
│   │
│   └── types/
│       └── express.d.ts  # Extend Express Request
│
├── tests/                # Integration tests (global)
│   └── example.test.ts
│
├── .env.example
├── eslint.config.js
├── jest.config.ts
├── tsconfig.json
├── tsconfig.test.json
├── package.json
├── README.md
└── LICENSE
```

---

## ⚙️ Tech Stack

- Node.js + Express
- TypeScript
- MySQL + Drizzle ORM
- Zod (validation)
- Jest + Supertest (testing)
- ESLint (linting)
- GitHub Actions (CI)

---

## ✨ Features

- Minimal, modular architecture
- Feature-based structure (`modules/`)
- Environment configuration
- Basic request validation (Zod)
- Centralized error handling
- Auth-ready middleware (pluggable)
- Type-safe Express extensions
- CI pipeline (lint, build, test)

---

## 📦 Use Cases

- REST APIs
- SaaS backends
- Microservices
- Backend for frontend (BFF)
- Starter for production systems

---

## 🚀 Scripts

```json
{
  "scripts": {
    "dev": "ts-node-dev -r tsconfig-paths/register src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js",
    "lint": "eslint .",
    "test": "jest",
    "test:run": "jest --runInBand",
    "test:ci": "cross-env NODE_ENV=test jest --runInBand --coverage"
  }
}
```

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

---

## 🧪 Testing

Run tests:

```bash
npm run test:run
```

Coverage is generated in CI.

---

## 🚀 Deployment (Optional)

This template does not include deployment configuration by default.

Recommended:

- Use Docker, AWS, Railway, or similar platforms
- Configure environment variables per environment
- Suggested branch flow:
  - `development` → staging
  - `main` → production

CI ensures linting, build, and tests pass before merging.

---

## 💡 Notes

- Use path aliases like `@/modules/...`
- `.env` files control environment-specific configuration
- `express.d.ts` extends `req.user` for auth support
- Auth is intentionally minimal and should be implemented per project
- This template prioritizes **simplicity over over-engineering**
