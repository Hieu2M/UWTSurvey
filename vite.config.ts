import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
<<<<<<< HEAD
  server: {
    // Handle client-side routing
    historyApiFallback: true,
  },
<<<<<<< HEAD
  preview: {
    port: 5173,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
        },
      },
    },
  },
});
=======
});
>>>>>>> parent of 4b31a6f (update refresh function)
=======
});
>>>>>>> parent of 9a337b3 (update refresh function 3)
