import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

// Copy index.html to 404.html for GitHub Pages SPA fallback (so refresh on /repo/about works)
function copy404Plugin() {
    return {
        name: 'copy-404',
        closeBundle() {
            const outDir = path.resolve(__dirname, 'dist')
            const indexPath = path.join(outDir, 'index.html')
            const notFoundPath = path.join(outDir, '404.html')
            if (fs.existsSync(indexPath)) {
                fs.copyFileSync(indexPath, notFoundPath)
            }
        },
    }
}

// https://vitejs.dev/config/
// For Vercel: use default base '/'
// For GitHub Pages (project site): set VITE_BASE_PATH=/portfolio-website/ in build
export default defineConfig({
    base: process.env.VITE_BASE_PATH || '/',
    plugins: [react(), copy404Plugin()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
})
