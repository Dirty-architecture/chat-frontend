import type {ReactNode} from 'react';
import router from "@/app/router";
import {RouterProvider} from "react-router";
import {QueryClient, QueryClientProvider,} from '@tanstack/react-query'


const queryClient = new QueryClient()

const App = (): ReactNode => {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}/>
        </QueryClientProvider>
    );
};

export default App;
