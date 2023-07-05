<script setup lang="ts">
import useLogin from '@/composable/useLogin'
import { ref } from 'vue';
const username = ref('')
const password = ref('')
const emit = defineEmits(['login'])

const handleSubmit = async () => {
  await login(username.value, password.value)
  if (!error.value) {
    emit('login')
  }
}

const { login, error } = useLogin()
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="username" placeholder="E-mail" type="text" id="username" name="username" />
    <input v-model="password" placeholder="Hasło" type="password" id="password" name="password" />
    <div>{{ error }}</div>
    <button type="submit">Zaloguj</button>
  </form>
</template>
<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;

  button {
    margin-top: 1em;
    padding: .5em;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #f9f9f9;
    cursor: pointer;
  }
}

input {
  padding: .5em;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
  margin: .2em;

}
</style>