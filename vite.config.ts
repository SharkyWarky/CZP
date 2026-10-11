import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { copyFile } from "fs/promises";
import { resolve } from "path";

export default defineConfig({
	base: "/CZP/",
	plugins: [
		react(),
		tailwindcss(),
		{
			name: "spa-fallback",
			closeBundle: async () => {
				await copyFile(resolve(__dirname, "dist/index.html"), resolve(__dirname, "dist/404.html"));
			},
		},
	],
});
