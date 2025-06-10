# Share Lib

A shared TypeScript library containing reusable components, types, schemas, and utilities for Next.js projects.

## 🚀 Features

- **React Components**: Pre-built, customizable UI components
- **TypeScript Types**: Common type definitions for consistent typing
- **Zod Schemas**: Validation schemas for forms and API responses
- **Utility Functions**: Helper functions for common operations
- **Tree-shakeable**: Import only what you need
- **TypeScript Ready**: Full TypeScript support with type definitions

## 📦 Installation

### From GitHub (Recommended for private repos)

```bash
npm install git+https://github.com/your-username/share-lib.git
# or
yarn add git+https://github.com/your-username/share-lib.git
# or
pnpm add git+https://github.com/your-username/share-lib.git
```

### From npm (if published)

```bash
npm install @your-org/share-lib
# or
yarn add @your-org/share-lib
# or
pnpm add @your-org/share-lib
```

## 🛠 Usage

### Components

```tsx
import { Button, Card, Modal } from '@your-org/share-lib/components'

function App() {
  return (
    <Card padding="lg" shadow="md">
      <Button variant="primary" size="md">
        Click me
      </Button>
    </Card>
  )
}
```

### Types

```typescript
import { User, ApiResponse, NavItem } from '@your-org/share-lib/types'

const user: User = {
  id: '1',
  email: 'user@example.com',
  name: 'John Doe',
  role: 'user',
  createdAt: '2024-01-01T00:00:00.000Z',
  updatedAt: '2024-01-01T00:00:00.000Z'
}
```

### Schemas

```typescript
import { loginSchema, userSchema } from '@your-org/share-lib/schemas'

// Validate login form
const loginData = loginSchema.parse({
  email: 'user@example.com',
  password: 'password123'
})

// Validate user data
const userData = userSchema.parse(apiResponse.data)
```

### Utils

```typescript
import { formatDate, debounce, storage } from '@your-org/share-lib/utils'

// Format dates
const formatted = formatDate(new Date(), 'long')

// Debounce function calls
const debouncedSearch = debounce(searchFunction, 300)

// Local storage utilities
storage.set('user', userData)
const user = storage.get('user')
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Modal.tsx
│   └── index.ts
├── types/              # TypeScript type definitions
│   └── index.ts
├── schemas/            # Zod validation schemas
│   └── index.ts
├── utils/              # Utility functions
│   └── index.ts
└── index.ts           # Main entry point
```

## 🔧 Development

### Prerequisites

- Node.js 18+
- npm/yarn/pnpm

### Setup

```bash
# Clone the repository
git clone https://github.com/your-username/share-lib.git
cd share-lib

# Install dependencies
npm install

# Build the library
npm run build

# Watch for changes during development
npm run dev
```

### Scripts

- `npm run build` - Build the library for production
- `npm run dev` - Build in watch mode for development
- `npm run clean` - Clean the dist directory
- `npm run type-check` - Run TypeScript type checking

## 📝 Adding New Components

1. Create your component in `src/components/YourComponent.tsx`
2. Export it from `src/components/index.ts`
3. Add any new types to `src/types/index.ts`
4. Update the main exports in `src/index.ts`

Example:

```tsx
// src/components/Input.tsx
import React from 'react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input: React.FC<InputProps> = ({ label, error, ...props }) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <input {...props} />
      {error && <span className="error">{error}</span>}
    </div>
  )
}
```

```typescript
// src/components/index.ts
export { Input } from './Input'
export type { InputProps } from './Input'
```

## 🚢 Publishing

### To GitHub Packages

1. Update version in `package.json`
2. Commit and push changes
3. Create a new release/tag on GitHub

### To npm Registry

```bash
npm run build
npm publish
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Update documentation
6. Create a pull request

## 📄 License

MIT

## 🔗 Links

- [Repository](https://github.com/your-username/share-lib)
- [Issues](https://github.com/your-username/share-lib/issues)
- [Changelog](https://github.com/your-username/share-lib/releases) 