import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/new-portfolio/',
  plugins: [react()],
  // server: {
  //   port: 3000, // Optional: use port 3000 like Create React App
  //   open: true  // Optional: automatically open browser
  // }
})