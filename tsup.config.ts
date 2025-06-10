import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    'src/schemas/index.ts',
    'src/lib/index.ts',
    'src/components/index.ts'
  ],
  format: ['esm', 'cjs'],
  dts: {
    resolve: true,
    entry: ['src/index.ts'],
  },
  clean: true,
  sourcemap: true,
  minify: true,
  treeshake: true,
  splitting: false,
  bundle: false,
  outDir: 'dist',
  external: [
    'react',
    'react-dom',
    '@radix-ui/react-slot',
    'class-variance-authority',
    'clsx',
    'tailwind-merge',
    'zod'
  ]
})
