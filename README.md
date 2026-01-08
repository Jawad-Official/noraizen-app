# Noraizen

**Your Business Operating System** - The all-in-one productivity platform for founders, creators, and teams.

## Project Structure

```
noraizen-app/
├── apps/
│   ├── web/          # Next.js 14 frontend
│   └── server/       # Hono API server
├── packages/
│   ├── db/           # Prisma database package
│   └── ui/           # Shared UI components
```

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm 9+
- PostgreSQL database

### Installation

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Setup environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your database credentials
   ```

3. **Generate Prisma client:**
   ```bash
   pnpm db:generate
   ```

4. **Push database schema:**
   ```bash
   pnpm db:push
   ```

### Development

**Run all services:**
```bash
pnpm dev
```

This will start:
- Web app: http://localhost:3000
- API server: http://localhost:3001

**Run specific app:**
```bash
cd apps/web && pnpm dev
# or
cd apps/server && pnpm dev
```

### Build

```bash
pnpm build
```

## Tech Stack

- **Frontend**: Next.js 14, React 19, TypeScript, Tailwind CSS
- **Backend**: Hono, Node.js
- **Database**: PostgreSQL, Prisma ORM
- **Monorepo**: Turborepo, pnpm workspaces

## Next Steps

Follow the [Detailed Execution Plan](../../../.gemini/antigravity/brain/bc44a5cb-18d8-4cb3-b925-b4424dbd3fe1/detailed_execution_plan.md) to implement features.

## License

Private - All Rights Reserved
