import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dotenv from 'dotenv'

dotenv.config(); // Carga las variables de entorno desde .env

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    // Exponer las variables de entorno al código del cliente
    // Las variables comenzarán con VITE_
    'process.env': process.env
  }
})
