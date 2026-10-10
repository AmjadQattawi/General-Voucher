import react from "@vitejs/plugin-react";
import { transformSync } from "@babel/core";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { inspectorServer } from "@react-dev-inspector/vite-plugin";
import inspectorBabelPlugin from "@react-dev-inspector/babel-plugin";

import type { Plugin } from "vite";

function inspectorSourcePlugin(): Plugin {
  return {
    name: "react-dev-inspector-source",
    enforce: "pre",
    apply: "serve",
    transform(code: string, id: string) {
      const filePath = id.split("?")[0];

      if (!/\.[jt]sx$/.test(filePath) || filePath.includes("node_modules")) {
        return null;
      }

      const result = transformSync(code, {
        filename: filePath,
        babelrc: false,
        configFile: false,
        sourceMaps: true,
        parserOpts: {
          plugins: ["jsx", "typescript"],
        },
        plugins: [[inspectorBabelPlugin, { cwd: process.cwd() }]],
      });

      return result
        ? {
            code: result.code ?? "",
            map: result.map,
          }
        : null;
    },
  };
}

export default defineConfig({
  plugins: [
    inspectorServer(),
    inspectorSourcePlugin(),
    react(),
    tailwindcss(),
  ],
});