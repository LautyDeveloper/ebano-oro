import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // <- Esto permite conexiones desde otros dispositivos
    port: 5173        // <- Podés cambiarlo si tenés algo ya corriendo en ese puerto
  }
})
