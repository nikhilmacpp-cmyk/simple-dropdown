import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";  // 👈 added
import path from "path";

export default defineConfig({
  plugins: [react(), svgr()], // 👈 added svgr plugin here
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/DropDown.jsx"),
      name: "MyDropdown",
      fileName: (format) => `my-dropdown-app.${format}.js`,
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
