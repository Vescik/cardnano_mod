<template>
    <div class="view_container overflow-container">
        <h1>Lista karnetów</h1>
        <div class="benefit_container">
            <SingleBenefit 
            v-for="benefit in benefits" 
            :key="benefit.id" 
            :benefit="benefit" />
        </div>
    </div>
</template>
<script setup lang="ts">
import SingleBenefit from '@/components/SingleBenefit.vue';
import { ref, onMounted } from 'vue';
import { useUserStore } from '@/stores/UserStore';
import { db } from '@/firebase/settings';
import { collection, getDocs, query,onSnapshot } from 'firebase/firestore';

    const userStore = useUserStore();
    const benefits = ref([]);
    const getBenefits = () => {
        const q = query(collection(db, 'organizations', userStore.user.data.organizationId, 'benefits'));
        const querySnapshot = getDocs(q);
        querySnapshot.then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                data.id = doc.id;
                benefits.value.push(data);
                console.log(data);
                
            });
        });
    };
    onMounted(() => {
        getBenefits();
    });




</script>
<style lang="scss" scoped>
.benefit_container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;

    margin-bottom: 20px;
   
}
.overflow-container {
}

</style>