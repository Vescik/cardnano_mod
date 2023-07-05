<template>
     <form @submit.prevent="handleSubmit">
    <input placeholder="Podaj adres email" v-model="email" type="text" name="email" />
    <input placeholder="Podaj nazwę użytkownika" v-model="displayName" type="text" name="email" />
    <input placeholder="Podaj kod organizacji" v-model="organizationCode" type="number" name="code" />
    <input placeholder="Hasło" v-model="password" type="password" id="password" name="password" />
    <div>{{ error }}</div>
    <button  type="submit">Zarejestruj</button>
  </form>
</template>

<script setup lang="ts">
 import { ref } from 'vue';
 import useSignup from '@/composable/useSignup'
    const username = ref('')
    const email = ref('')
    const password = ref('')
    const displayName = ref('')
    const organizationCode = ref('')
    const emit = defineEmits(['signup'])

    const { signup,error } = useSignup()

    const handleSubmit = async () => {
      await signup(email.value, password.value,displayName.value,organizationCode.value)
        if(!error.value){
            emit('signup')
        }
    }

</script>

<style lang="scss" scoped>
form{
  display: flex;
  flex-direction: column;
 
  button{
    margin-top: 1em;
    padding: .5em;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #f9f9f9;
    cursor: pointer;
  }
}
input{
    padding: .5em;
    margin: .2em;
      border: 1px solid #ccc;
      border-radius: 4px;
      background-color: #f9f9f9;
}
</style>