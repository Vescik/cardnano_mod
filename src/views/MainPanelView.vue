<template>
    <div class="main__panel  view_container">
        <h1>Lista członków organizacji</h1>
        <table>
            <thead>
                <tr>
                    <th>Imię i nazwisko</th>
                    <th>Status karnetu</th>
                    <th>Kod członkowski</th>
                    <th>Typ karnetu</th>
                </tr>
            </thead>
            <tbody>
                <SingleOrgMember @click="logMember(member)" v-for="member in members" :key="member.id" :member="member" />

            </tbody>
        </table>
    </div>
</template>
  
<script setup lang="ts">
import SingleOrgMember from '@/components/SingleOrgMember.vue';
import { collection,  getDoc, doc, getDocs,onSnapshot } from "firebase/firestore";
import { useMemberStore } from '@/stores/MemberStore';
import { useUserStore } from '@/stores/UserStore';
import { db } from '@/firebase/settings';
import { ref, onMounted,onBeforeMount } from 'vue';

const members = ref([]);
const  userStore = useUserStore();

const getMembers = async () => {
    const collectionID = "organizations"
    console.log(userStore.user.data.organizationId);

    const docID = userStore.user.data.organizationId;
    
    const collectionRef = collection(db, collectionID, docID, "users");

    onSnapshot(collectionRef, (snapshot) => {
        snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
                members.value.push(change.doc.data());
            }
            
        });
    });

    const querySnapshot = await getDocs(collection(db, collectionID, docID, "users"));
    console.log();

    const docRef = doc(db, collectionID, docID);
    const docSnapshot = await getDoc(docRef);
    members.value = querySnapshot.docs.map(doc => doc.data());
};
const memberStore = useMemberStore();
const logMember = (member) => {
    console.log(member);
    
    memberStore.setMember(member);
};

onMounted(async () => {
    console.log('mounted');
    await getMembers();
}
);

</script>

<style scoped lang="scss">
.view_container{
    background-color: #F9E4D1;
    width: 100%;
    border-radius: 20px;
    padding: 10px;

}
.main__panel {
   

    & h1 {
        margin-bottom: 20px;
    }


    & table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0 5px;

        & thead tr {
            color: #94918A;
            font-size: 1.2rem;
            font-weight: 500;
        }

        & tr {
            border-radius: 10px;
            transition: all 0.3s ease-in-out;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;

            &:hover {
                background-color: #0000008c;
                cursor: pointer;
            }
        }

        

    }

}

tbody tr:nth-child(odd) {
    background-color: #6a995a;
    height: 50px;
    width: 100%;
}


</style>
  