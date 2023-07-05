<template>
    <div class="user-profile-modal">
      <div class="user-profile-content">
        <h2>Profil członka</h2>
        <img :src="member.photo" alt="">
        <table>
          <tr>
            <td><strong>Imię i nazwisko</strong></td>
            <td>{{ member.name}}</td>
          </tr>
          <tr>
            <td><strong>Typ karnetu:</strong></td>
            <td>{{ member.accesType }}</td>
          </tr>
          <tr>
            <td><strong>Adres:</strong></td>
            <td>{{ member.adress }}</td>
          </tr>
          <tr>
            <td><strong>Data urodzin:</strong></td>
            <td>{{ member.birthDate }}</td>
          </tr>
          <tr>
            <td><strong>Kod członka:</strong></td>
            <td>{{ member.code }}</td>
          </tr>
          <tr>
            <td><strong>Zniżka:</strong></td>
            <td>{{ member.discount }}</td>
          </tr>
          <tr>
            <td><strong>Data wygaśnięcia:</strong></td>
            <td>{{ member.accesTime }}</td>
          </tr>
        </table>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useMemberStore } from '@/stores/MemberStore';
  
  const memberStore = useMemberStore();
  
  const member = memberStore.handleMember();
  </script>
  
  <style lang="scss" scoped>
  .user-profile-modal{
    width: 100%;
  }
  .user-profile-content{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
      font-size: 2rem;
      margin: 20px 0;
    }
    img{
      aspect-ratio: 1/1;
      width: 100px;
      height: 100px;
      margin: 20px 0;
    }
  }

  table{
    border: 1px solid black;
    td{
      border: 1px solid black;
      padding: 5px;
      text-align: left;
    }
  }
  </style>
  