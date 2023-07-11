<template>
  <h1>Dodaj karnet</h1>
  <div class="form_container">
      <form  autocomplete="off"   @submit.prevent.default="addBenefit">
    
          <label for="userName">Nazwa karnetu</label>
          <input type="text" v-model="benefits.name" id="userName" name="userName" placeholder="Wpisz nazwę">
    

     <div>
      <div class="group-inputs">
          <label for="userName">Nazwa benefitu</label>
          <input @keydown.prevent.enter="handleAddBenefit" type="text" v-model="singleBenef" id="userName" name="userAdress" placeholder="Wpisz benefit">
          <button @click.prevent="handleAddBenefit" >Dodaj</button>
        
      </div>
      <div class="group-inputs">
          <label for="userName">Zniżka</label>
          <select v-model="benefits.discount"  name="studentDiscount">
              <option value="default" default  >Wybierz</option>
              <option value="0">0%</option>
              <option value="10%">10%</option>
              <option value="25%">25%</option>
              <option value="50%">50%</option>
              <option value="75%">75%</option>
              <option value="100%">100%</option>
          </select>
      </div>
      </div>
          <ul class="benefit_container">
            <li @click="handleRemoveBenefit(benef)"  class="benefit_el" v-for="benef in benefits.benefitList" :key="benef">
            {{ benef }}
            </li>
          </ul>
     
     
      <button>Dodaj karnet</button>
      </form>
     


  </div>
</template>

<script setup lang="ts">
import SingleOrgMember from '@/components/SingleOrgMember.vue';
import { collection, addDoc,} from "firebase/firestore";
import { ref, onMounted,watch } from 'vue';
import { db } from '@/firebase/settings';
import { useActivityModalStore } from '@/stores/ActivityModal';
import { useUserStore } from '@/stores/UserStore';

const benefits = ref({
  name: '',
  benefitList: [],
  discount: '',
  code: Math.floor(Math.random() * 100000),
});
const activityModalStore = useActivityModalStore();
const userStore = useUserStore();


const collectionID = "organizations"
const docID = userStore.user.data.organizationId
const addBenefit = async () => {
  const docRef = await addDoc(collection(db, collectionID, docID, "benefits"), benefits.value);
  activityModalStore.toggleActivityModal("")
  console.log("Document written with ID: ", docRef.id);

};
const singleBenef = ref("")
const handleAddBenefit = () => {
const val = singleBenef.value
if(val.length > 1) benefits.value.benefitList.push(val)

singleBenef.value = ""
}
const handleRemoveBenefit = (benef:string) => {
console.log(benefits.value.benefitList);
const filteredList = benefits.value.benefitList.filter((el:string) => {
  console.log(el, benef);
  console.log(!el.includes(benef));
  return !el.includes(benef);
});
benefits.value.benefitList = filteredList;
return filteredList;
};

</script>

<style lang="scss" scoped>
.benefit{
&_container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;;
  width: 100%;
  margin-top: 10px;
  padding: 0;
  list-style: none;
}
&_el{
    cursor: pointer;
    margin: 0 5px 5px 0;
    padding: 5px 10px;
    background-color: #a6d497;
    border-radius: 10px;
    color: #fff;
    transition: all 0.15s ease-in-out;

    &:hover{
        background-color: #517346;
    }
  }
}
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



