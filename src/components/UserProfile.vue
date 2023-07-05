<template>
  <div class="panel__user">
    <div class="panel__user__details">
      <img class="panel__user__avatar" :src="userStore.user.data.avatar" alt="avatar.png">
      <h2 class="panel__user__name">{{ userStore.user.data.displayName }}</h2>
      <h2 class="panel__user__title">{{ userStore.user.data.organizationName }}</h2>
    </div>
    <div class="panel__user__activity">
      <h3 class="panel__user__head">Aktywności</h3>
 
        <ActivityUserBtn btnText="Dodaj członka" btnMode="addUser" />
      <ActivityUserBtn  btnText="Dodaj karnet"  btnMode="addBenefit"/>
   

       

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';
import { useUserStore } from '@/stores/UserStore';

const userStore = useUserStore();
import ActivityUserBtn from './ActivityUserBtn.vue';

const benefits = ref([])
const props = defineProps({
  userAvatar: String,
  userName: String,
  userTitle: String
})
</script>



<style lang="scss" scoped>
.panel {
  &__user {
    min-width: 350px;
    height: 100%;
    background: #83bb73;
    border-radius: 0 20px 20px 0;
    display: flex;
    flex-direction: column;

    &__head{
     
      text-align: left;   
      margin-bottom: 10px;
    }

    &__details {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 70px 20px 40px 20px;

      &::after {
        content: '';
        width: 95%;
        height: 1px;
        background: #979CA5;
        margin: 40px 0 0 0;
      }
    }

    &__name {
      color: #000;
      font-size: 1.8rem;
      margin: 5px 0;
    }

    &__title {
      color: #fff;
      font-size: 1.1rem;
      font-weight: 100;
    }

    &__avatar {
      width: 130px;
      height: 130px;
      border-radius: 50%;
      margin-bottom: 30px;
    }
    &__activity{
      width: 100%;
      height: 100%;
      
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: auto;   
     
      
    }
  }
}
.btns{
  width: 100%;
}
</style>