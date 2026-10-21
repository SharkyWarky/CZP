// vite.config.ts
/// <reference types="vitest/config" />
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

export default defineConfig({
	base: "/CZP/",
	plugins: [react(), tailwindcss(), tanstackRouter()],
	test: {
		globals: true,
		environment: "happy-dom",
		setupFiles: "./src/test/setup.ts",
	},
});
