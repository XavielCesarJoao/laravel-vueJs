<script setup lang="ts">

import axiosInstance from "@/lib/Axios";
import {ref} from "vue";

const user = ref({
  name: "",
  email: "",
});

const getUser = async () => {
  try {
    const response = await axiosInstance.get('/user');
    user.value = response.data;
  }catch (error){
    console.log("PORRAZ");
  }
}
const logout = async () => {
  try{
    const response = await axiosInstance.post('/logout');
    console.log(response.data);
  }catch (error){
    console.error(error);
  }
}

getUser();

</script>

<template>
<div class="p-5">
  <h1 class="text-3xl text-red-800">Dasboard</h1>
  <p>{{user.name}}</p>
  <br>
  <p>{{user.email}}</p>
  <div>
    <button @click="logout" class="btn btn-primary">Logout</button>
  </div>
</div>
</template>

<style scoped>

</style>