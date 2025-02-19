import router from "@/router";
import axios from "axios";
import {userAuthStore} from "@/store/auth";
import {useToast} from "vue-toastification";

// Comentario qualquer
const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api',
    withCredentials: true,
    withXSRFToken: true,
});

axiosInstance.interceptors.response.use(
    (response) => {
        return response;

    },

    async (error) => {
        const auth = userAuthStore();
        const toast = useToast();
        switch (error.response.status) {
            case 401:
                auth.CleanState();
                toast.warning("Tem de iniciar novamente a seção");
                router.push('login');
                break;
            case 404:
                toast.warning("Ouve um erro");
                router.push('404');
                break;
            case 419:
                auth.CleanState();
                toast.warning("Tem de iniciar novamente a seção");
                router.push('login');
                break;
            case 500:
                toast.error("Erro no servidor");
                router.push('500');
                break;
        }
        return Promise.reject(error);
    }
);
export default axiosInstance;
