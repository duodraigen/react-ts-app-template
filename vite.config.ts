import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";

export default defineConfig({
	base: "./",

	resolve: {
		alias: {
			"@src": path.resolve(__dirname, "./src"),
			"@utils": path.resolve(__dirname, "./src/utils"),
			"@views": path.resolve(__dirname, "./src/views"),
			"@assets": path.resolve(__dirname, "./src/assets"),
			"@layouts": path.resolve(__dirname, "./src/layouts"),
			"@components": path.resolve(__dirname, "./src/components"),
		},
	},

	plugins: [react()],
});
