<script setup lang="ts">
import { userAuthStore } from "@/store/auth";
const auth = userAuthStore();
</script>

<template>

  <h1 class="text-3xl text-black-100 p-4">LOGIN</h1>
    <div class="max-w-md mx-auto  p-2">
      <FormKit type="form" submit-label="Vamos" @submit="auth.Login">
        <FormKit type="email" label="Email" name="email" > </FormKit>
        <FormKit type="password" label="Password" name="password"> </FormKit>
      </FormKit>
    </div>

</template>

<style scoped>

</style>