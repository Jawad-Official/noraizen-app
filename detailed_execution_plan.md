# Noraizen - Detailed Execution Plan

## Table of Contents
1. [Bootstrap Order & Foundation](#1-bootstrap-order--foundation)
2. [Project File Architecture](#2-project-file-architecture)
3. [Environment Configuration](#3-environment-configuration)
4. [Feature Implementation Roadmap](#4-feature-implementation-roadmap)

---

## 1. Bootstrap Order & Foundation

### Why This Order?
Build from **data layer → UI primitives → editor → features**. This ensures each layer has stable foundations.

### Bootstrap Sequence
1. **Monorepo Setup** (Day 1)
2. **Database Schema** (Day 1-2)
3. **Authentication** (Day 2-3)
4. **UI System** (Day 3-4)
5. **Core Editor** (Day 5-7)
6. **Blocks System** (Week 2)
7. **Views & Super Tags** (Week 3-4)
8. **AI Integration** (Week 5)
9. **Advanced Features** (Week 6+)

---

## 2. Project File Architecture

```
noraizen-app/
├── apps/
│   ├── web/                          # Next.js 14 App
│   │   ├── src/
│   │   │   ├── app/                  # App Router
│   │   │   │   ├── (auth)/          # Auth routes
│   │   │   │   │   ├── login/
│   │   │   │   │   ├── signup/
│   │   │   │   │   └── layout.tsx
│   │   │   │   ├── (dashboard)/     # Main app routes
│   │   │   │   │   ├── home/
│   │   │   │   │   ├── spaces/
│   │   │   │   │   ├── tags/
│   │   │   │   │   ├── focus/
│   │   │   │   │   ├── marketplace/
│   │   │   │   │   └── layout.tsx
│   │   │   │   ├── api/             # API Routes
│   │   │   │   │   ├── blocks/
│   │   │   │   │   ├── ai/
│   │   │   │   │   └── sync/
│   │   │   │   ├── layout.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── components/          # App-specific components
│   │   │   │   ├── blocks/          # Block types
│   │   │   │   │   ├── TaskBlock.tsx
│   │   │   │   │   ├── NoteBlock.tsx
│   │   │   │   │   ├── ProjectBlock.tsx
│   │   │   │   │   ├── CalendarBlock.tsx
│   │   │   │   │   ├── TimelineBlock.tsx
│   │   │   │   │   ├── ChartBlock.tsx
│   │   │   │   │   └── EmptyBlock.tsx
│   │   │   │   ├── views/           # Data views
│   │   │   │   │   ├── TableView.tsx
│   │   │   │   │   ├── BoardView.tsx
│   │   │   │   │   ├── ListView.tsx
│   │   │   │   │   ├── CalendarView.tsx
│   │   │   │   │   ├── TimelineView.tsx
│   │   │   │   │   ├── GalleryView.tsx
│   │   │   │   │   ├── FeedView.tsx
│   │   │   │   │   └── ChartView.tsx
│   │   │   │   ├── editor/          # Rich text editor
│   │   │   │   │   ├── Editor.tsx
│   │   │   │   │   ├── Toolbar.tsx
│   │   │   │   │   ├── BlockMenu.tsx
│   │   │   │   │   └── extensions/
│   │   │   │   ├── graph/           # Graph view
│   │   │   │   │   └── GraphView.tsx
│   │   │   │   ├── focus/           # Focus mode
│   │   │   │   │   ├── FocusTimer.tsx
│   │   │   │   │   └── VisualJourney.tsx
│   │   │   │   ├── ai/              # AI assistant
│   │   │   │   │   ├── AIChat.tsx
│   │   │   │   │   └── AICommands.tsx
│   │   │   │   └── shared/          # Shared components
│   │   │   ├── lib/                 # Utilities
│   │   │   │   ├── editor/          # Editor utilities
│   │   │   │   ├── sync/            # Sync utilities
│   │   │   │   └── utils.ts
│   │   │   ├── stores/              # Zustand stores
│   │   │   │   ├── useBlockStore.ts
│   │   │   │   ├── useSpaceStore.ts
│   │   │   │   ├── useSuperTagStore.ts
│   │   │   │   └── useFocusStore.ts
│   │   │   └── hooks/               # Custom hooks
│   │   ├── public/
│   │   ├── package.json
│   │   ├── next.config.js
│   │   ├── tailwind.config.js
│   │   └── tsconfig.json
│   │
│   └── server/                       # Hono API Server
│       ├── src/
│       │   ├── index.ts             # Entry point
│       │   ├── routes/              # API routes
│       │   │   ├── auth.ts
│       │   │   ├── blocks.ts
│       │   │   ├── spaces.ts
│       │   │   ├── tags.ts
│       │   │   ├── ai.ts
│       │   │   └── sync.ts
│       │   ├── middleware/          # Auth, CORS, etc.
│       │   ├── services/            # Business logic
│       │   │   ├── ai/
│       │   │   ├── sync/
│       │   │   └── notifications/
│       │   └── websocket/           # WebSocket handlers
│       ├── package.json
│       └── tsconfig.json
│
├── packages/
│   ├── db/                          # Database package
│   │   ├── prisma/
│   │   │   ├── schema.prisma       # Database schema
│   │   │   └── migrations/
│   │   ├── src/
│   │   │   ├── index.ts            # Prisma client export
│   │   │   └── seed.ts             # Seed data
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── ui/                          # Shared UI components
│   │   ├── src/
│   │   │   ├── components/         # Radix UI wrappers
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Input.tsx
│   │   │   │   ├── Select.tsx
│   │   │   │   ├── Dialog.tsx
│   │   │   │   ├── Dropdown.tsx
│   │   │   │   └── ...
│   │   │   ├── styles/
│   │   │   │   └── globals.css
│   │   │   └── index.ts
│   │   ├── package.json
│   │   ├── tailwind.config.js
│   │   └── tsconfig.json
│   │
│   └── tsconfig/                    # Shared TS configs
│       ├── base.json
│       ├── nextjs.json
│       └── react.json
│
├── .env.example
├── .gitignore
├── package.json
├── pnpm-workspace.yaml
├── turbo.json
└── README.md
```

---

## 3. Environment Configuration

### `.env.example`
```bash
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/noraizen"
REDIS_URL="redis://localhost:6379"

# Auth (Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/login
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/signup
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/home
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/home

# AI
OPENAI_API_KEY=
ANTHROPIC_API_KEY=

# File Storage
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_S3_BUCKET=
AWS_REGION=

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
API_URL=http://localhost:3001

# Search
MEILISEARCH_HOST=http://localhost:7700
MEILISEARCH_API_KEY=
```

---

## 4. Feature Implementation Roadmap

## Feature 1: Authentication & User Management

### 1.1 Feature Overview
**Purpose**: Secure user authentication with social logins, 2FA, and session management.

**User Value**: 
- Secure account creation and login
- Password-less authentication options
- Protection with 2FA

**Dependencies**:
- PostgreSQL database
- Clerk or Auth.js
- Redis for session storage

### 1.2 Step-by-Step Implementation

#### Step 1: Setup Clerk Authentication
1. Install Clerk SDK: `pnpm add @clerk/nextjs`
2. Configure Clerk provider in `apps/web/src/app/layout.tsx`
3. Create auth middleware in `apps/web/src/middleware.ts`
4. Setup protected routes

#### Step 2: Create Auth UI
1. Design login page (`apps/web/src/app/(auth)/login/page.tsx`)
2. Design signup page (`apps/web/src/app/(auth)/signup/page.tsx`)
3. Add social login buttons (Google, GitHub)
4. Style with Tailwind + Framer Motion

#### Step 3: Database User Model
1. Define User schema in `packages/db/prisma/schema.prisma`
2. Run migration: `pnpm db:migrate`
3. Create user service in `apps/server/src/services/user.ts`

#### Step 4: Session Management
1. Configure Redis connection
2. Implement session storage
3. Add session validation middleware

### 1.3 File & Folder Architecture

**New Files**:
```
apps/web/
├── src/
│   ├── app/(auth)/
│   │   ├── login/page.tsx          # Login UI
│   │   ├── signup/page.tsx         # Signup UI
│   │   └── layout.tsx              # Auth layout
│   └── middleware.ts               # Route protection

packages/db/
└── prisma/
    └── schema.prisma               # User model

apps/server/
└── src/
    ├── routes/auth.ts              # Auth endpoints
    └── services/user.ts            # User business logic
```

**File Responsibilities**:
- `login/page.tsx`: Renders login form, handles Clerk SignIn component
- `signup/page.tsx`: Renders signup form, handles Clerk SignUp component
- `middleware.ts`: Protects routes, validates sessions
- `schema.prisma`: Defines User table structure
- `auth.ts`: API routes for auth operations
- `user.ts`: User CRUD operations

### 1.4 Testing Strategy (TestSprite)

#### Unit Tests
```typescript
// Test: User model validation
describe('User Model', () => {
  test('should create user with valid data', async () => {
    const user = await createUser({
      email: 'test@example.com',
      name: 'Test User'
    });
    expect(user).toHaveProperty('id');
    expect(user.email).toBe('test@example.com');
  });

  test('should reject duplicate email', async () => {
    await expect(
      createUser({ email: 'existing@example.com' })
    ).rejects.toThrow('Email already exists');
  });
});
```

#### Integration Tests
```typescript
// Test: Login flow
describe('Authentication Flow', () => {
  test('should login with valid credentials', async () => {
    const response = await api.post('/api/auth/login', {
      email: 'test@example.com',
      password: 'SecurePass123'
    });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('sessionToken');
  });

  test('should redirect to /home after login', async () => {
    // Mock Clerk session
    // Navigate to /login
    // Submit credentials
    // Verify redirect to /home
  });
});
```

#### E2E Tests (Browser)
```typescript
// TestSprite: Complete signup flow
test('User Signup Journey', async ({ page }) => {
  await page.goto('/signup');
  await page.fill('[name="email"]', 'newuser@example.com');
  await page.fill('[name="password"]', 'SecurePass123');
  await page.click('button[type="submit"]');
  
  // Verify redirect to onboarding
  await expect(page).toHaveURL('/home');
  await expect(page.locator('text=Welcome')).toBeVisible();
});
```

**What to Mock**:
- Clerk API calls (use test keys)
- Email sending (use mock SMTP)

**What to Test Live**:
- Database operations
- Session creation
- Route protection

### 1.5 Validation Checklist
- [ ] User can sign up with email + password
- [ ] User can sign up with Google/GitHub
- [ ] User can login with credentials
- [ ] 2FA works correctly
- [ ] Protected routes redirect to login
- [ ] Session persists after refresh
- [ ] Logout clears session
- [ ] Password reset flow works

**Common Failure Points**:
- CORS issues with Clerk
- Redirect loops in middleware
- Session not syncing with database

---

## Feature 2: Spaces System

### 2.1 Feature Overview
**Purpose**: Organize content into isolated workspaces (Spaces).

**User Value**:
- Separate work/personal/projects
- Share specific spaces with teams
- Clean organization

**Dependencies**:
- Authentication (User ownership)
- Database (Space model)

### 2.2 Step-by-Step Implementation

#### Step 1: Database Schema
1. Create Space model in Prisma
2. Add Space-User relation (ownership)
3. Add Space-Block relation (one-to-many)
4. Run migration

```prisma
model Space {
  id        String   @id @default(cuid())
  name      String
  icon      String?
  userId    String
  user      User     @relation(fields: [userId], references: [id])
  blocks    Block[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

#### Step 2: API Layer
1. Create CRUD endpoints in `apps/server/src/routes/spaces.ts`
2. Implement space service with authorization checks
3. Add validation (Zod schemas)

#### Step 3: Frontend Store
1. Create Zustand store `useSpaceStore.ts`
2. Add TanStack Query hooks for fetching/mutating
3. Implement optimistic updates

#### Step 4: UI Components
1. Spaces list page (`apps/web/src/app/(dashboard)/spaces/page.tsx`)
2. Create space dialog
3. Space card component
4. Space settings dialog

### 2.3 File Architecture

**New Files**:
```
apps/web/
├── src/
│   ├── app/(dashboard)/
│   │   └── spaces/
│   │       ├── page.tsx            # Spaces list
│   │       ├── [id]/page.tsx       # Single space view
│   │       └── components/
│   │           ├── SpaceCard.tsx
│   │           ├── CreateSpaceDialog.tsx
│   │           └── SpaceSettings.tsx
│   ├── stores/
│   │   └── useSpaceStore.ts        # Space state management
│   └── hooks/
│       └── useSpaces.ts            # TanStack Query hooks

packages/db/
└── prisma/
    └── schema.prisma               # Space model

apps/server/
└── src/
    ├── routes/spaces.ts            # Space API routes
    └── services/spaces.ts          # Space business logic
```

### 2.4 Testing Strategy

#### Unit Tests
```typescript
describe('Space Service', () => {
  test('should create space for authenticated user', async () => {
    const space = await createSpace({
      name: 'My Project',
      userId: 'user123'
    });
    expect(space.name).toBe('My Project');
    expect(space.userId).toBe('user123');
  });

  test('should prevent unauthorized space access', async () => {
    await expect(
      getSpace('space123', 'wrongUser')
    ).rejects.toThrow('Unauthorized');
  });
});
```

#### Integration Tests
```typescript
describe('Space API', () => {
  test('GET /api/spaces returns user spaces', async () => {
    const response = await api.get('/api/spaces', {
      headers: { Authorization: 'Bearer token' }
    });
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test('POST /api/spaces creates new space', async () => {
    const response = await api.post('/api/spaces', {
      name: 'New Space',
      icon: '🚀'
    });
    expect(response.status).toBe(201);
  });
});
```

#### E2E Tests
```typescript
test('Create and view space', async ({ page }) => {
  await page.goto('/spaces');
  await page.click('button:has-text("New Space")');
  await page.fill('[name="name"]', 'My Space');
  await page.click('[data-icon="🏠"]');
  await page.click('button:has-text("Create")');
  
  await expect(page.locator('text=My Space')).toBeVisible();
});
```

### 2.5 Validation Checklist
- [ ] User can create new space
- [ ] Spaces display in list
- [ ] User can edit space name/icon
- [ ] User can delete space
- [ ] Only owner can access space
- [ ] Empty state shows when no spaces

---

## Feature 3: Block System (Core Editor)

### 3.1 Feature Overview
**Purpose**: Modular content blocks with rich text editing.

**User Value**:
- Flexible content creation
- Drag & drop organization
- Rich formatting

**Dependencies**:
- Spaces (blocks belong to spaces)
- Tiptap editor
- Y.js (for collaboration)

### 3.2 Step-by-Step Implementation

#### Step 1: Install Tiptap
```bash
pnpm add @tiptap/react @tiptap/starter-kit @tiptap/extension-placeholder
```

#### Step 2: Create Base Editor
1. Create `Editor.tsx` component
2. Configure Tiptap extensions
3. Add toolbar component
4. Implement block menu (slash commands)

#### Step 3: Database Schema
```prisma
model Block {
  id          String     @id @default(cuid())
  type        BlockType  # Task, Note, Project, etc.
  content     Json       # Tiptap JSON content
  properties  Json       # Dynamic properties
  spaceId     String
  space       Space      @relation(fields: [spaceId], references: [id])
  parentId    String?
  parent      Block?     @relation("BlockHierarchy", fields: [parentId], references: [id])
  children    Block[]    @relation("BlockHierarchy")
  order       Int
  createdAt   DateTime   @default(now())
  updatedAt   DateTime   @updatedAt
}

enum BlockType {
  TEXT
  TASK
  NOTE
  PROJECT
  CALENDAR
  TIMELINE
  CHART
  EMPTY
}
```

#### Step 4: Block Components
Create components for each block type:
1. `TaskBlock.tsx` - Checkbox, dates, priority
2. `NoteBlock.tsx` - Simple text
3. `ProjectBlock.tsx` - Project metadata
4. `CalendarBlock.tsx` - Calendar integration
5. `TimelineBlock.tsx` - Timeline visualization
6. `ChartBlock.tsx` - Data charts
7. `EmptyBlock.tsx` - Blank canvas

#### Step 5: Block Properties System
1. Create property types (Text, Checkbox, Status, Priority, Date, etc.)
2. Build property editor UI
3. Implement property validation

### 3.3 File Architecture

**New Files**:
```
apps/web/src/components/
├── editor/
│   ├── Editor.tsx                  # Main Tiptap editor
│   ├── Toolbar.tsx                 # Formatting toolbar
│   ├── BlockMenu.tsx               # Slash command menu
│   └── extensions/
│       ├── SlashCommand.ts         # Custom extension
│       ├── DragHandle.ts           # Drag & drop
│       └── BlockNode.ts            # Custom block node
│
├── blocks/
│   ├── BlockRenderer.tsx           # Renders correct block type
│   ├── BaseBlock.tsx               # Shared block wrapper
│   ├── TaskBlock.tsx
│   ├── NoteBlock.tsx
│   ├── ProjectBlock.tsx
│   ├── CalendarBlock.tsx
│   ├── TimelineBlock.tsx
│   ├── ChartBlock.tsx
│   └── EmptyBlock.tsx
│
└── properties/
    ├── PropertyEditor.tsx          # Property sidebar
    ├── TextProperty.tsx
    ├── CheckboxProperty.tsx
    ├── StatusProperty.tsx
    ├── PriorityProperty.tsx
    ├── DateProperty.tsx
    └── SuperTagProperty.tsx

apps/web/src/stores/
└── useBlockStore.ts                # Block state management

apps/server/src/
├── routes/blocks.ts                # Block CRUD API
└── services/blocks.ts              # Block business logic
```

### 3.4 Testing Strategy

#### Unit Tests
```typescript
describe('Block Creation', () => {
  test('should create task block with properties', async () => {
    const block = await createBlock({
      type: 'TASK',
      content: { text: 'Complete report' },
      properties: {
        status: 'TODO',
        priority: 'HIGH',
        dueDate: '2026-01-15'
      }
    });
    expect(block.type).toBe('TASK');
    expect(block.properties.priority).toBe('HIGH');
  });
});
```

#### Integration Tests
```typescript
describe('Block API', () => {
  test('should update block content', async () => {
    const response = await api.patch('/api/blocks/block123', {
      content: { text: 'Updated content' }
    });
    expect(response.status).toBe(200);
  });

  test('should reorder blocks via drag-drop', async () => {
    await api.patch('/api/blocks/reorder', {
      blockIds: ['block1', 'block3', 'block2']
    });
    // Verify new order in DB
  });
});
```

#### E2E Tests (TestSprite)
```typescript
test('Create and edit task block', async ({ page }) => {
  await page.goto('/spaces/space123');
  
  // Create new block via slash command
  await page.type('.editor', '/task');
  await page.click('text=Task');
  
  // Add task content
  await page.type('.editor', 'Review pull requests');
  
  // Set priority
  await page.click('[data-property="priority"]');
  await page.click('text=High');
  
  // Verify block exists
  await expect(page.locator('text=Review pull requests')).toBeVisible();
  await expect(page.locator('[data-priority="high"]')).toBeVisible();
});

test('Drag and drop block reordering', async ({ page }) => {
  await page.goto('/spaces/space123');
  
  const block1 = page.locator('[data-block-id="block1"]');
  const block2 = page.locator('[data-block-id="block2"]');
  
  await block1.dragTo(block2);
  
  // Verify new order
  const blocks = await page.locator('[data-block]').all();
  expect(await blocks[0].getAttribute('data-block-id')).toBe('block2');
  expect(await blocks[1].getAttribute('data-block-id')).toBe('block1');
});
```

**Mocks**:
- Mock Tiptap collaborative provider for tests

**Live Tests**:
- Database block CRUD
- Block ordering logic
- Property validation

### 3.5 Validation Checklist
- [ ] Can create all block types via slash commands
- [ ] Blocks can be edited inline
- [ ] Drag & drop reordering works
- [ ] Block properties can be added/edited
- [ ] Nested blocks work (parent/child)
- [ ] Block deletion works
- [ ] Undo/redo works
- [ ] Toolbar formatting applies correctly

---

*... (Continue with remaining features: Super Tags, Data Views, Graph View, AI Assistant, Focus Mode, Collaboration, Marketplace) ...*

---

## 5. Development Order Summary

### Week 1: Foundation
1. Monorepo setup
2. Database + Prisma
3. Authentication (Clerk)
4. Basic UI components

### Week 2: Core Editor
1. Tiptap integration
2. Block system
3. Properties system
4. Basic views (List/Table)

### Week 3-10: Continue with remaining features following this detailed pattern

---

## Next Steps

1. **Review this detailed plan**
2. **Scaffold monorepo & file structure**
3. **Begin Feature 1: Authentication**
