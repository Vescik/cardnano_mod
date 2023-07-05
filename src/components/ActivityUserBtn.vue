<template>
    <button @click="handleModal()"  class="button_activity">
        <div class="button_activity_container">
            <span class="button_activity_icon">
                <span class="button_activity_icon_inner"></span>
            </span>
            <p> {{ btnText }}</p>
        </div>
    </button>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';
import { useActivityModalStore } from '@/stores/ActivityModal';
const activityModalStore = useActivityModalStore();
const props = defineProps({
    btnText: {
        type: String,
        default: '',
        required: true
    },
    btnMode: {
        type: String,
        required: false
    }
})
const handleModal = () => {
    activityModalStore.toggleActivityModal(props.btnMode);
}

</script>

<style lang="scss">
button{
    font-family: Avenir, Helvetica, Arial, sans-serif;
}
.button {

    &_activity {
        cursor: pointer;
        width: 80%;
        display: flex;
        align-items: center;
        margin: 5px;
        background-color: #fff;
        outline: none;
        border: none;
        padding: 10px;
        font-size: 1rem;
     
        border-radius: 10px;
        transition: all 0.3s ease-in-out;

        &_container {
            display: flex;
            justify-content: space-between;
            align-items: center;

          & p{
            font-size: 1rem;
            margin-left: 20px;
            font-weight: bold;
            color: #000;
          }

        }

        &:hover .button_activity_icon {
            background-color: #fff;
            transform: scale(1.1);
        }
        &:hover {
            background-color: #F9E4D1;
        }

        @mixin button {
            position: absolute;
            width: 80%;
            height: 5px;
            background-color: #FFC000;
            border-radius: 2px;
        }

        &_icon {
            width: 30px;
            height: 30px;
            padding: 20px;
            margin: 0 auto;
            background-color: #F9E4D1;
            border-radius: 10px;
            position: relative;
            transition: transform 0.3s ease-in-out;

            &_inner {
                @include button;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                transition: all 0.3s ease-in-out;

                &::before {
                    @include button;
                    content: "";
                    left: 50%;
                    transform: rotate(90deg) translate(0, 250%);
                }
            }

        }
    }
}
</style>