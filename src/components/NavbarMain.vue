<template>
      <nav class="nav__main">
      <h2>CardNano</h2> 
      <ul>
        <li>
          <router-link to="/">
            <span class="material-symbols-rounded">home</span>
            Panel Główny
          </router-link>
        </li>
        <li>
          <router-link to="/stats">
            <span class="material-symbols-rounded">wallet</span>

            Lista karnetów</router-link>
        </li>
        <li>
          <router-link to="/settings">
            <span class="material-symbols-rounded">query_stats</span>

            Statystyki</router-link>
        </li>
        <li>
          <router-link to="/settings">
            <span class="material-symbols-rounded">settings</span>

            Ustawienia</router-link>
        </li>
      </ul>
      <router-link to="/login">Wyloguj</router-link>
  </nav>
</template>
<script setup lang="ts">
import {useUserStore} from "@/stores/UserStore";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const router = useRouter();
const handleLogut = () => {
  router.push("/login");
};

</script>
<style lang="scss" scoped >
@import url(https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined);
 a{
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
  font-weight: bold;
  font-size: 1.2rem;
  
  & span {
    margin-right: 10px ;
  }
}
 .nav{
  &__main{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center; 
    height: 90vh;
    width: 15%;
    min-width: 250px;

   & li {
    list-style: none;
    text-align: left;
    transition: all 0.3s ease-in-out;
    margin: 10px;
    &:hover{
      background-color: #F9E4D1;
      border-radius: 10px;
  }

    & a{
       text-decoration: none;
      font-weight: bold;
      padding: 8px;

      color: #000;
    }
   }
   & h2{
    font-size: 2rem;
    font-weight: bold; 
    color: #000;
    margin: 50px 0 -250px 0 ;
   }
    
    
  } 
 
}
.router-link-active{
  background-color: #F9E4D1;
  border-radius: 10px;

}
</style>