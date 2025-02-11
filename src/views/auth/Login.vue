<script setup lang="ts">
import axiosInstance from "@/lib/Axios.js";
import {reactive} from "vue";
import {AxiosError} from "axios";
import {FormKitIcon} from "@formkit/vue";
import type {FormKitNode} from "@formkit/core";

interface LoginForm {
  email: string;
  password: string;
}

const login = async (payload: LoginForm, node?: FormKitNode) => {
  await axiosInstance.get("/sanctum/csrf-cookie", {
    baseURL: "http://localhost:8000"
  })

  try {
    await axiosInstance.post("/login", payload);
    console.log("Deu certo");
  } catch (e) {

    if (e instanceof AxiosError && e.response?.status === 422) {
      console.log("Não deu certo");
      node?.setErrors([], e.response?.data.errors)
    }
  }
};

</script>

<template>

  <h1 class="text-3xl text-black-100 p-4">LOGIN</h1>
    <div class="max-w-md mx-auto  p-2">
      <FormKit type="form" submit-label="Vamos" @submit="login">
        <FormKit type="email" label="Email" name="email" > </FormKit>
        <FormKit type="password" label="Password" name="password"> </FormKit>
      </FormKit>
    </div>

</template>

<style scoped>

</style>