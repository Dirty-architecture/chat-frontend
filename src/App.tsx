import type {ReactNode} from 'react';
import router from "@/app/router";
import {RouterProvider} from "react-router";
import {QueryClient, QueryClientProvider,} from '@tanstack/react-query'
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";


const queryClient = new QueryClient()

const App = (): ReactNode => {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}/>
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    );
};

export default App;
