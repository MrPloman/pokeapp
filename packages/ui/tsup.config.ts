import cssModulePlugin from "esbuild-plugin-css-module";
import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/index.ts"],
    format: ["cjs", "esm"],
    dts: true,
    esbuildPlugins: [cssModulePlugin()],
});
