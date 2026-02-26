import axios, {type AxiosError, type AxiosInstance, HttpStatusCode} from "axios";

const AXIOS_INTERCEPTOR: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
});

AXIOS_INTERCEPTOR.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
        const status = error.response?.status as HttpStatusCode.Forbidden | undefined;
        if (status && [HttpStatusCode.Unauthorized, HttpStatusCode.Forbidden].includes(status)) {
            console.log(status)
            // Важно: кидаем именно нашу ошибку, чтобы UI мог отличить её от остальных.
            return Promise.reject(new Error("Not authorized / session expired"));
        }

        return Promise.reject(error);
    }
);

export {AXIOS_INTERCEPTOR};