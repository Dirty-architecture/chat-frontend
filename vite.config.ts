import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";
import path from 'path';
import {pathToFileURL} from "node:url";

// https://vite.dev/config/

export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    css: {
        preprocessorOptions: {
            scss: {
                loadPaths: [path.resolve(__dirname, "src")],
                importers: [
                    {
                        findFileUrl(url) {
                            if (url.startsWith("@/")) {
                                const absPath = path.resolve(__dirname, "src", url.slice(2));
                                return pathToFileURL(absPath);
                            }
                            return null;
                        },
                    },
                ],
                additionalData: `
          @use "app/common/styles/variables" as *;
        `
            }
        }
    }
});