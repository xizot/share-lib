# Usage Example in Next.js Projects

This document shows how to use the shared library in your Next.js projects.

## Installation

After pushing this library to GitHub, install it in your Next.js projects:

```bash
npm install git+https://github.com/your-username/share-lib.git
```

## Configuration

### 1. Update your Next.js project's `package.json`

Add the library as a dependency:

```json
{
  "dependencies": {
    "@your-org/share-lib": "git+https://github.com/your-username/share-lib.git"
  }
}
```

### 2. Configure TypeScript (if using TypeScript)

Update your `tsconfig.json` to include the library types:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@your-org/share-lib/*": ["node_modules/@your-org/share-lib/dist/*"]
    }
  }
}
```

## Usage Examples

### 1. Using Components

```tsx
// pages/index.tsx or app/page.tsx
import { Button, Card, Modal } from '@your-org/share-lib/components'
import { useState } from 'react'

export default function HomePage() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="p-8">
      <Card padding="lg" shadow="md" className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Welcome</h1>
        <p className="mb-4">This is using our shared components!</p>
        
        <div className="space-x-2">
          <Button 
            variant="primary" 
            onClick={() => setShowModal(true)}
          >
            Open Modal
          </Button>
          <Button variant="outline">
            Secondary Action
          </Button>
        </div>
      </Card>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Example Modal"
        size="md"
      >
        <p>This modal comes from our shared library!</p>
        <div className="mt-4">
          <Button 
            variant="secondary" 
            onClick={() => setShowModal(false)}
            fullWidth
          >
            Close
          </Button>
        </div>
      </Modal>
    </div>
  )
}
```

### 2. Using Types and Schemas for API

```tsx
// lib/api.ts
import { ApiResponse, User } from '@your-org/share-lib/types'
import { userSchema, loginSchema } from '@your-org/share-lib/schemas'

export async function fetchUser(id: string): Promise<User> {
  const response = await fetch(`/api/users/${id}`)
  const data: ApiResponse<User> = await response.json()
  
  // Validate the response using our shared schema
  return userSchema.parse(data.data)
}

export async function loginUser(credentials: { email: string; password: string }) {
  // Validate input using shared schema
  const validatedCredentials = loginSchema.parse(credentials)
  
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(validatedCredentials)
  })
  
  return response.json()
}
```

### 3. Using Utilities

```tsx
// components/UserCard.tsx
import { formatDate, timeAgo, truncate } from '@your-org/share-lib/utils'
import { User } from '@your-org/share-lib/types'
import { Card } from '@your-org/share-lib/components'

interface UserCardProps {
  user: User
}

export function UserCard({ user }: UserCardProps) {
  return (
    <Card padding="md" shadow="sm">
      <div className="flex items-center space-x-4">
        {user.avatar && (
          <img 
            src={user.avatar} 
            alt={user.name}
            className="w-12 h-12 rounded-full"
          />
        )}
        <div>
          <h3 className="font-semibold">{user.name}</h3>
          <p className="text-gray-600">{truncate(user.email, 30)}</p>
          <p className="text-sm text-gray-500">
            Joined {formatDate(user.createdAt, 'long')}
          </p>
          <p className="text-xs text-gray-400">
            Last active {timeAgo(user.updatedAt)}
          </p>
        </div>
      </div>
    </Card>
  )
}
```

### 4. Using Storage Utilities

```tsx
// hooks/useLocalStorage.ts
import { storage } from '@your-org/share-lib/utils'
import { useState, useEffect } from 'react'

export function useLocalStorage<T>(key: string, defaultValue: T) {
  const [value, setValue] = useState<T>(() => {
    return storage.get(key, defaultValue)
  })

  useEffect(() => {
    storage.set(key, value)
  }, [key, value])

  return [value, setValue] as const
}

// Usage in component
export function ThemeToggle() {
  const [theme, setTheme] = useLocalStorage('theme', 'light')

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="p-2 rounded bg-gray-200 dark:bg-gray-800"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  )
}
```

### 5. Form Validation with Schemas

```tsx
// components/LoginForm.tsx
import { useState } from 'react'
import { loginSchema } from '@your-org/share-lib/schemas'
import { Button } from '@your-org/share-lib/components'
import { z } from 'zod'

export function LoginForm() {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      // Validate form data using shared schema
      const validData = loginSchema.parse(formData)
      setErrors({})
      
      // Submit form
      console.log('Valid data:', validData)
      // Call your API here
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {}
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message
          }
        })
        setErrors(newErrors)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-2 border rounded"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>
      
      <div>
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          className="w-full p-2 border rounded"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
      </div>
      
      <Button type="submit" variant="primary" fullWidth>
        Login
      </Button>
    </form>
  )
}
```

## Keeping the Library Updated

### Updating the Library

When you make changes to the shared library:

1. Update the version in `package.json`
2. Commit and push changes
3. Create a new release on GitHub

### Updating in Your Projects

```bash
# Update to latest version
npm update @your-org/share-lib

# Or reinstall from GitHub
npm uninstall @your-org/share-lib
npm install git+https://github.com/your-username/share-lib.git
```

## Tips

1. **Use semantic versioning** for your library releases
2. **Document breaking changes** in your changelog
3. **Test components** in different Next.js environments
4. **Consider CSS dependencies** - make sure your components work with your styling system
5. **Use tree-shaking** imports to keep bundle sizes small 