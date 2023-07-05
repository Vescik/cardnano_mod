<template>
    <div class="benefit_box">
        <p>{{ benefit.name }}</p>
        <ul>
            <li v-for=" tag in benefit.benefitList">{{ tag }}</li>
        </ul>

    </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, onBeforeMount } from 'vue';

const props = defineProps({
    benefit: Object
})

const benefit = ref(props.benefit);
onBeforeMount(() => {
    console.log(benefit.value);
    
})


</script>

<style lang="scss" scoped>
.benefit{
    &_box{
        cursor: pointer;
        background-color: #fff;
        width: clamp(200px, 100%, 250px);
        max-height: 400px;
        flex-grow: 1;
        border-radius: 10px;
        margin: 10px;
        padding: 20px;
        box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
        transition: all 0.2s ease-in-out;

        &:hover{
            box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
        }
        p{
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 10px;
        }

        ul{
            list-style: none;
            padding: 0;
            margin: 0;
            li{
                padding: 5px 0;
                border-bottom: 1px solid #eee;
                word-break: normal;
            }
        }
    }
}

</style>