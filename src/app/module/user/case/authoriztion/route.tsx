import type {ReactNode} from 'react';
import AuthorizationForm from "./component/form";
import UnauthorizedWrapper from "@/app/module/user/general/wrapper";
import AlternativeActions from "./component/alternative-actions";
import Hr from "@/app/module/user/general/hr";


const AuthorizationRoute = (): ReactNode => {
    return (
        <UnauthorizedWrapper>
            <AuthorizationForm/>
            <Hr/>
            <AlternativeActions/>
        </UnauthorizedWrapper>
    );
};

export default AuthorizationRoute;
