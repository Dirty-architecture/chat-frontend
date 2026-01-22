import type {ReactNode} from 'react';
import AuthorizationForm from "./component/form";
import UnauthorizedWrapper from "@/app/module/user/general/wrapper";
import Hr from "@/app/module/user/general/hr";
import {ROUTER_PATH} from "@/app/common/const/router.ts";
import AlternativeActions from "@/app/module/user/general/alternative-actions";


const AuthorizationRoute = (): ReactNode => {
    return (
        <UnauthorizedWrapper>
            <AuthorizationForm/>
            <Hr/>
            <AlternativeActions to={ROUTER_PATH.REGISTER} linkText="Зарегистрироваться"
                                mainText='Еще не зарегистрированы? '/>

        </UnauthorizedWrapper>
    );
};

export default AuthorizationRoute;
