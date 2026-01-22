import type {ReactNode} from 'react';
import UnauthorizedWrapper from "@/app/module/user/general/wrapper";
import RegistrationForm from "@/app/module/user/case/registration/form";
import Hr from "@/app/module/user/general/hr";
import AlternativeActions from "@/app/module/user/general/alternative-actions";
import {ROUTER_PATH} from "@/app/common/const/router.ts";

const RegistrationRoute = (): ReactNode => {
    return (
        <UnauthorizedWrapper>
            <RegistrationForm/>
            <Hr/>
            <AlternativeActions to={ROUTER_PATH.AUTHORIZATION} linkText="Авторизироваться"
                                mainText='Уже зарегистрированы? '/>
        </UnauthorizedWrapper>
    );
};

export default RegistrationRoute;
