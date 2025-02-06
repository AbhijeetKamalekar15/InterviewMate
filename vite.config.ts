import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: Number(process.env.VITE_PORT) || 3000, // Ensure it's a number
    strictPort: true, // Ensures the app only uses the assigned port
    allowedHosts: ["interviewmate-wgjq.onrender.com"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
