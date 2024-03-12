<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";
import useFirebaseAuth from "~/composables/useFirebaseAuth";

definePageMeta({ layout: "auth" });
const toast = useToast();
const router = useRouter();

const { loginWithEmailAndPassword } = useFirebaseAuth();

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Must be at least 8 characters"),
});

type Schema = z.output<typeof schema>;

const state = reactive({
  email: undefined,
  password: undefined,
});

const onSubmit = async ({ data }: FormSubmitEvent<Schema>) => {
  const { email, password } = data;
  const user = await loginWithEmailAndPassword(email, password);
  toast.add({ title: `Welcome back, ${user?.displayName}!` });
  router.push("/");
};
</script>

<template>
  <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <div class="text-2xl">Sign In</div>
    <UFormGroup label="Email" name="email">
      <UInput v-model="state.email" />
    </UFormGroup>

    <UFormGroup label="Password" name="password">
      <UInput v-model="state.password" type="password" />
    </UFormGroup>

    <UButton type="submit" block> Login </UButton>

    <UButton type="button" to="/auth/register" block variant="outline">
      Register
    </UButton>
  </UForm>
</template>

<style lang="scss" scoped></style>
