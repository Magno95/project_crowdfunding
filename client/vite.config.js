import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/projects/web3/crowdfunding/',
  define: {
    global: "globalThis",
    "process.env": {},
  },
});
