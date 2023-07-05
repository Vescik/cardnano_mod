<template>
    <h1>Dodaj członka organizacji</h1>
    <div class="form_container">
        <form  autocomplete="off" @submit.prevent="addUser">
      
            <label for="userName">Imię i nazwisko</label>
            <input type="text" v-model="user.name" id="userName" name="userName" placeholder="Wpisz imię i nazwisko">
      

       <div>
        <div class="group-inputs">
            <label for="userName">Data urodzenia</label>
            <input type="date" v-model="user.birthDate" id="userName" name="userAdress" placeholder="Wpisz adres zamkieszkania">
          
        </div>
        <div class="group-inputs">
            <label for="userName">Zniżka</label>
            <select v-model="user.discount"  name="studentDiscount">
                <option value="default" default  >Wybierz</option>
                <option value="false">Brak</option>
                <option value="true">Studencka</option>
            </select>
        </div>
        </div>
            <label for="userName">Adres zamieszkania</label>
            <input v-model="user.adress" type="text" id="userAddres" name="userName" placeholder="Wpisz Adres zamieszkania">
       
        <h3>Rodzaj członkowstwa</h3>
        <div>
            <div class="group-inputs">
                <label for="accesTime">Data ważnośći</label>
                <input type="date" name="accesTime">
            </div>
            <div class="group-inputs">
                <label for="accesType">Typ karnetu</label>
                <select v-model="user.accesType" name="accesType">
                    <option v-for="ben in benefitsNames">{{ ben }}</option>
                </select>
            </div>
        </div>
        <button>Dodaj użytkownika</button>
        </form>
        <form autocomplete="off">
            <label class="file-input-label"  for="userPhoto">Zdjęcie użytkownika</label>
            <input  type="file" id="userPhoto"  name="userPhoto" accept="image/png, image/jpeg">
                

        </form>


    </div>
</template>

<script setup lang="ts">
import SingleOrgMember from '@/components/SingleOrgMember.vue';
import { collection, addDoc,getDocs} from "firebase/firestore";
import { ref, onBeforeMount,computed } from 'vue';
import { db } from '@/firebase/settings';
import { useActivityModalStore } from '@/stores/ActivityModal';
import { useUserStore } from '@/stores/UserStore';

const user = ref({
    name: '',
    birthDate: '',
    adress: '',
    discount: '',
    code: Math.floor(Math.random() * 100000),
    accesTime: '',
    accesType: '',
    photo: 'https://www.exscribe.com/wp-content/uploads/2021/08/placeholder-image-person-jpg.jpg',
});
const activityModalStore = useActivityModalStore();
const userStore = useUserStore();


const collectionID = "organizations"
const docID = userStore.user.data.organizationId
const addUser = async () => {
    const docRef = await addDoc(collection(db, collectionID, docID, "users"), user.value);
    activityModalStore.toggleActivityModal("")
    console.log("Document written with ID: ", docRef.id);

};
const benefits = ref([])

const getBenefits = async () => {
    const querySnapshot = await getDocs(collection(db, collectionID, docID, "benefits"));
    const benefitArray = []
    querySnapshot.forEach((doc) => {
        benefitArray.push(doc.data())
        return benefitArray
    });    
    return benefitArray
};

const benefitsNames = computed(() => {
    return benefits.value.map((ben) => {
        return ben.name
    })
})


onBeforeMount(async () => {
    benefits.value = await getBenefits()
   

})

</script>

<style lang="scss" scoped>
.group-inputs{
    display: flex;
    flex-direction: column;
    width: 100%;
}
.form_container {
    display: flex;
    flex-direction: row;
    padding: 30px;
    justify-content: space-around;

  & h3{
    text-align: left;
    margin: 30px 0 15px 0;
  }

  & form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 50px;
    width: 100%;

    & button{ 
      font-family: Montserrat, Helvetica, Arial, sans-serif;
    }
    
    & > div{
        display: flex;
        flex-direction: row;
    }

    /* Form fields */
    & label {
        text-align: left;
      margin-bottom: 0.5rem;
      font-weight: bold;
    }

    & input,
    & select {
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin-bottom: 1rem;
    }

    & input[type="date"] {
      /* Additional styling for date input */
      appearance: none;
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin-bottom: 1rem;
    }

    /* Submit button */
    & button {
      padding: 0.5rem 1rem;
      background-color: #517346;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    & input[type="file"] {
      display: none;
    }
  }
}
.file-input-label {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      background-color: #f9f9f9;
      cursor: pointer;
    }

 .file-input-label::before {
      content: "+";
      font-size: 2rem;
      color: #ccc;
    }
</style>



