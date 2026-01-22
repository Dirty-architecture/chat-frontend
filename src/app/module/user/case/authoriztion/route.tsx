import type {ReactNode} from 'react';
import AuthorizationForm from "@/app/module/user/case/authoriztion/component/form";
import UnauthorizedWrapper from "@/app/module/user/wrapper";
import AlternativeActions from "@/app/module/user/case/authoriztion/component/alternative-actions";
import Hr from "@/app/module/user/case/authoriztion/component/hr";


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
