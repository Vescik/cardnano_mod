<template>
   <div v-if="activityModalStore.activityModal" class="modal">
    <div @click="activityModalStore.toggleActivityModal('')" class="backdrop"></div>
    <div class="activity_modal">
        <slot/>
    </div>
   </div>
</template>

<script setup lang="ts">
import { useActivityModalStore } from '@/stores/ActivityModal';
const activityModalStore = useActivityModalStore();

</script>

<style lang="scss" scoped>
.backdrop{
    position: fixed;
    z-index: 10;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
}
.activity_modal{
    position: fixed;
    z-index: 100;
    width: 60%;
    height: 60%;
    background-color: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px; 
}
</style>