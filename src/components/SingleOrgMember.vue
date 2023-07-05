<template>
 <tr @click="activityModalStore.toggleActivityModal('showUser')" >
 
    <td class="test">
        <img :src="member.photo" alt="">
        <p>{{ member.name }}</p>
    </td>
    <td>{{ checkActive() }}</td>
    <td>{{ formatCode() }}</td>
    <td>{{ member.accesType }}</td>

  </tr>
  </template>
  
  <script setup lang="ts">
  import { defineProps,computed } from 'vue';
  import { useActivityModalStore } from '@/stores/ActivityModal';

  const activityModalStore = useActivityModalStore();

  

  const checkActive = computed(()=>{
        return  ()=>{            
        const status  = props.member.isCarnetActive
        const isActive = status ? 'Aktywny' : 'Nieaktywny'  
        return isActive          
        }
    })

    const formatCode = computed(()=>{
        return  ()=>{
        const code  = String(props.member.code )
        const foramtedCode = code.replace(/(\d{3})(\d{3})/, "$1 $2");
        return foramtedCode
        }
    })


  const props = defineProps({
    member: {
      type: Object,
      required: true
    }
  });
  </script>
  
  <style lang="scss" scoped>
  tr {
    background-color: #517346;
    height: 50px;
    width: 100%;
    border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
    
   
  }
  .test{
    line-height: 55px;

        img{
            transform: translateY(10px);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-right: 10px;    
            margin-left: 10px;
        }

        p{
            display: inline-block;
            text-align: center;
        }
  }
  

  
  td {
    color: #fff;
    font-size: 1.1rem;
    font-weight: 500;
  }
  tr td:first-child {

  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

tr td:last-child {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

  </style>