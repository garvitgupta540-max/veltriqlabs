import { defineConfig } from 'vite'
const pages = ['index', 'products', 'services', 'work', 'about', 'contact', 'privacy', 'terms']

export default defineConfig({
  build: {
    rollupOptions: {
      input: Object.fromEntries(pages.map((page) => [page, `${import.meta.dirname}/${page}.html`]))
    }
  }
})
