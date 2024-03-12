<script setup lang="ts">
definePageMeta({ layout: "dashboard" });
</script>

<template>
  <div class="w-screen h-screen">
    <NuxtLink class="h-12 w-12" to="auth/login">Login</NuxtLink>
    <NuxtLink class="h-12 w-12" to="auth/register">Register</NuxtLink>
  </div>
</template>

<style lang="scss" scoped></style>
