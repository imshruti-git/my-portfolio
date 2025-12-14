import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias: {
      '@' : path.resolve(__dirname, './src'),
      '@configs' : path.resolve(__dirname, './src/configs'),
      '@constants' : path.resolve(__dirname, './src/constants'),
      '@containers' : path.resolve(__dirname, './src/containers'),
    }
  }
})
