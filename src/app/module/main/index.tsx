import {LoadComponent} from "ui/lazy-loading";
import {lazy} from "react";

const MainRoute = LoadComponent(lazy(async () => import("./route.tsx")), <div/>)

export default MainRoute;