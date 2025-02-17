<script setup lang="ts">
import {userAuthStore} from "@/store/auth";
import {onMounted} from "vue";

const auth = userAuthStore();

onMounted(() => {
  if (!auth.isLoggedIn) {
     console.log("Mesmo logado fiz uma requisição ao servidor");
     auth.GetUser();
  }

})
</script>

<template>
  <div class="p-5">
    <h1 class="text-3xl text-red-800">Dasboard</h1>
    <p>{{ auth.user?.name }}</p>
    <br>
    <p>{{ auth.user?.email }}</p>
    <div>
      <button @click="auth.Logout" class="btn btn-primary">Logout</button>
    </div>
  </div>
</template>

<style scoped>

</style>