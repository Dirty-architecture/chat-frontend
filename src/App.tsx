import type {ReactNode} from 'react';
import router from "@/app/router";
import {RouterProvider} from "react-router";

const App = (): ReactNode => {
    return (
        <RouterProvider router={router}/>
    );
};

export default App;
