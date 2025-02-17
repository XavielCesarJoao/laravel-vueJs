<script setup lang="ts">
import {userAuthStore} from "@/store/auth";

const auth = userAuthStore();
</script>

<template>
  <h1 class="text-3xl text-black-100 p-4">Register</h1>
  <div class="max-w-md mx-auto p-3">
    <FormKit type="form" submit-label="Register" @submit="auth.Register">
        <FormKit type="text" label="Nome" name="name">  </FormKit>
        <FormKit type="email" label="Email" name="email"> </FormKit>
        <FormKit type="password" label="Password" name="password"> </FormKit>
        <FormKit type="password" label="Password Confirmation" name="password_confirmation"></FormKit>
    </FormKit>
  </div>
</template>

<style scoped>

</style>