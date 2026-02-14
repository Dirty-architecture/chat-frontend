import {LoadComponent} from "ui/lazy-loading";
import {lazy} from "react";

const RegistrationRoute = LoadComponent(lazy(async () => import("./route.tsx")), <div/>)

export default RegistrationRoute;