<script lang="ts" setup>
useHead({
  title: "Test",
  titleTemplate: `%s - Test`,
});
</script>
<template>
  <Body
    class="bg-white dark:bg-neutral-950 text-neutral-800 dark:text-neutral-300"
  >
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <UNotifications />
  </Body>
</template>
