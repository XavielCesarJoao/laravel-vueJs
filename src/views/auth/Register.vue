<script setup lang="ts">
import axiosInstance from "@/lib/Axios.js";
import {reactive} from "vue";
import {AxiosError} from "axios";
import {FormKitNode} from "@formkit/core";

interface RegisterForm {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}


const register = async (data: RegisterForm, node?: FormKitNode) => {
  console.log('executou a função');
  await axiosInstance.get("/sanctum/csrf-cookie", {
    baseURL: "http://localhost:8000"
  })
  try {
    console.log('Deu certo')
    await axiosInstance.post("/register", data);

  } catch (e) {
    console.error('Não deu certo' + e.toString())
    if (e instanceof AxiosError && e.response.status === 422) {
          node.setErrors([], e.response?.data.errors);

    }
  }
};

const cleanData = () =>{
}

</script>

<template>
  <h1 class="text-3xl text-black-100 p-4">Register</h1>
  <div class="max-w-md mx-auto p-3">
    <FormKit type="form" submit-label="Register" @submit="register">
        <FormKit type="text" label="Nome" name="name">  </FormKit>
        <FormKit type="email" label="Email" name="email"> </FormKit>
        <FormKit type="password" label="Password" name="password"> </FormKit>
        <FormKit type="password" label="Password Confirmation" name="password_confirmation"></FormKit>
    </FormKit>
  </div>
</template>

<style scoped>

</style>