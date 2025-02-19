import {defineStore} from "pinia";
import {ref} from "vue";
import type {LoginForm, RegisterForm, User} from "./../types/Index";
import {FormKitNode} from "@formkit/core";
import axiosInstance from "@/lib/Axios";
import router from "@/router";
import {AxiosError, isAxiosError} from "axios";


export const userAuthStore = defineStore("auth", () => {

        const user = ref<User | null>(null);
        const isLoggedIn = ref<boolean>(false);
        const entryHour = ref<string>("Andar com a POO");
        const Register = async (data: RegisterForm, node?: FormKitNode) => {
            await axiosInstance.get("/sanctum/csrf-cookie", {
                baseURL: "http://localhost:8000",
            })

            try {

                await axiosInstance.post("/register", data);
                await GetUser();
                router.push("/dashboard");
            } catch (e) {
                if (e instanceof AxiosError && e.response.status === 422) {
                    node.setErrors([], e.response?.data.errors)
                }
            }
        }

        const Login = async (data: LoginForm, node?: FormKitNode) => {
            await axiosInstance.get("/sanctum/csrf-cookie", {
                baseURL: "http://localhost:8000",
            })
            try {
                await axiosInstance.post("/login", data);
                await GetUser();
                router.push("/dashboard")
            } catch (e) {
                if (e instanceof AxiosError && e.response.status === 422) {
                    console.log("Deu pau" + e);
                    node.setErrors([], e.response?.data.errors)
                }
            }
        }
        const GetUser = async () => {
            try {
                const userData = await axiosInstance.get("/user");
                user.value = userData.data;
                isLoggedIn.value = true;
            } catch (e) {

            }
        }

        const CleanState = () =>{
            user.value = null;
            isLoggedIn.value = false;
        }
        const production = () => {
            return new Promise((recive, reject) => {

            });
        }

        const Logout = async () => {
            try {
                const response = await axiosInstance.post('/logout');
                user.value = null;
                isLoggedIn.value = false;
                router.push("/login")
            } catch (error) {
                console.error(error);
            }
        }


        return {user, isLoggedIn, Register, Login, Logout, GetUser, entryHour, CleanState}

    }, {
        persist: {
            storage: sessionStorage,
            pick: ["user", "isLoggedIn", "entryHour"]
        }
    }
)
