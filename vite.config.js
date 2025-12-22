import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/ToDo-List-App/",
  plugins: [react()],
});
