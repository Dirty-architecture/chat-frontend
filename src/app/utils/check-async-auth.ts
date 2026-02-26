import {useNavigate} from "react-router";
import {ROUTER_PATH} from "@/app/common/const";

interface ICheckAsyncAuthProps<T> {
    onSuccess: (data: T) => void
    onError: (e: unknown) => void
}

const useCheckAsyncAuth = () => {
    const navigate = useNavigate();


    return async <T>(callback: () => Promise<T>, options?: ICheckAsyncAuthProps<T>) => {
        try {
            const result = await callback()
            options?.onSuccess?.(result)
            return result
        } catch (e: unknown) {
            options?.onError?.(e)

            if (e instanceof Error && e.message === 'Not authorized / session expired') {
                navigate(ROUTER_PATH.AUTHORIZATION)
            }
            throw e
        }
    }
}

export {useCheckAsyncAuth}