<script setup lang="ts">
import LoginForm from '@/components/LoginForm.vue'
import SignupForm from '@/components/SignupForm.vue';
import { useUserStore } from '@/stores/UserStore';
import { auth } from '@/firebase/settings';
import { onAuthStateChanged } from "firebase/auth";
import { ref,onBeforeMount } from 'vue';
import { useRouter } from 'vue-router'

const userStore = useUserStore();
  const showLogin = ref(true)
  const route = useRouter()

  const handleLogin = () => {
    onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('zalogowany');
      
      route.push("/")

    } else {
      console.log('niezalogowany')
      route.push({name: 'Login'})

    }
  });
  }
  onBeforeMount(() => {
    userStore.logout();
  })

</script>

<template>

    <main class="view_container" >
      <div class="login_container">
    <div v-if="showLogin" >
      <h2>Zaloguj</h2>
      <LoginForm @login="handleLogin" />
      <p>Nie posiadasz konta?<a @click="showLogin = false"> Zarejestruj się</a></p>
    </div>
    <div v-else>
      <h2>Zarejestruj</h2>
      <SignupForm @signup="handleLogin" />
      <p>Posiadasz konto?<a @click="showLogin = true"> Zaloguj się</a></p>
    </div>
  </div>
    </main>



</template>
<style lang="scss" scoped>
.login_container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 250px;
  border-radius: 20px;
  background-color: #a6d497;


  & p a{
    font-weight: 800;
    cursor: pointer;

}
}

.view_container{
    display: flex;
    justify-content: center;
    align-items: center;
}



</style>