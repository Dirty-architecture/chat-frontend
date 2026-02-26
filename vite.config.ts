import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";
import path from 'path';
import {pathToFileURL} from "node:url";
import mkcert from "vite-plugin-mkcert";
// https://vite.dev/config/

export default defineConfig({
    plugins: [
        react(),
        tsconfigPaths(),
        process.env.HTTPS ? mkcert() : []
    ],
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
    },
    server: {
        host: true, // == 0.0.0.0
        port: 5173,
        strictPort: true,
        allowedHosts: true
    },
    build: {
        rolldownOptions: {
            output: {
                advancedChunks: {
                    groups: [
                        {
                            name(moduleId) {
                                if (!moduleId.includes('node_modules')) return null;

                                // react ecosystem
                                if (moduleId.includes('/react/') || moduleId.includes('/react-dom/')) return 'vendor-react';

                                // router
                                if (moduleId.includes('/react-router/')) return 'vendor-router';

                                // data fetching + virtualization
                                if (moduleId.includes('/@tanstack/react-query/')) return 'vendor-react-query';
                                if (moduleId.includes('/@tanstack/react-virtual/')) return 'vendor-react-virtual';

                                // state + forms
                                if (moduleId.includes('/zustand/')) return 'vendor-zustand';
                                if (moduleId.includes('/react-hook-form/')) return 'vendor-react-hook-form';

                                // icons / styles utils
                                if (moduleId.includes('/@phosphor-icons/')) return 'vendor-icons';
                                if (moduleId.includes('/modern-normalize/')) return 'vendor-normalize';

                                return 'vendor-misc';
                            },
                        },
                    ],
                },
            },
        },
    },
});