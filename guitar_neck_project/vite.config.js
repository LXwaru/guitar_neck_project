import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: [
    "/guitar_neck_project/", 
    "/guitar_neck_project/GuitarNeckNotes/",
    "/guitar_neck_project/GuitarNeckIntervals/",
    "/guitar_neck_project/GuitarNeckTriads/"
  ],
  plugins: [react()],
})
