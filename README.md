# @vm/share-lib

Shared library with Zod schemas, utilities, and UI components for React applications.

## Installation

```bash
yarn add @vm/share-lib
# or
npm install @vm/share-lib
```

## Features

- 🔧 **Zod Schemas**: Pre-built validation schemas for common entities
- 🛠️ **Utilities**: Helper functions for common operations  
- 🎨 **UI Components**: React components with Tailwind CSS styling
- 📦 **TypeScript**: Full TypeScript support with type definitions
- 🌳 **Tree-shakable**: Only import what you need

## Usage

### Import Everything

```typescript
import { UserSchema, ProductSchema, Button, formatPrice } from '@vm/share-lib';
```

### Import Specific Modules

```typescript
// Import only schemas
import { UserSchema, ProductSchema, ApiResponseSchema } from '@vm/share-lib/schemas';

// Import only utilities
import { formatPrice, slugify, debounce } from '@vm/share-lib/lib';

// Import only components
import { Button } from '@vm/share-lib/components';
```

### Schemas

```typescript
import { UserSchema, ProductSchema, ApiResponseSchema } from '@vm/share-lib/schemas';

// Validate user data
const user = UserSchema.parse({
  id: '123e4567-e89b-12d3-a456-426614174000',
  email: 'user@example.com',
  username: 'johndoe',
  fullName: 'John Doe',
  role: 'user'
});
```

### Validation Utilities

```typescript
import { validateSchema, createSuccessResponse, ValidationError } from '@vm/share-lib/lib';

// Safe validation
const result = validateSchema(UserSchema, userData);
if (result.success) {
  console.log(result.data);
} else {
  console.error(result.error);
}

// Create API responses
const response = createSuccessResponse('User created successfully', user);
```

### Helper Functions

```typescript
import { formatPrice, slugify, debounce, formatDate } from '@vm/share-lib/lib';

// Format currency
const price = formatPrice(1999.99, 'USD'); // "$1,999.99"

// Create slugs
const slug = slugify('Hello World!'); // "hello-world"

// Debounce functions
const debouncedSave = debounce(saveFunction, 500);
```

### UI Components

```typescript
import { Button } from '@vm/share-lib/components';

function App() {
  return (
    <Button variant="default" size="lg">
      Click me
    </Button>
  );
}
```

## Development

```bash
# Install dependencies
yarn install

# Build the library
yarn build

# Watch mode during development
yarn dev

# Type checking
yarn type-check
```

## License

MIT 