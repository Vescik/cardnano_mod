import { defineStore } from 'pinia'
import { ref } from 'vue'


export const useActivityModalStore = defineStore('activityModal', () => {
const activityModal = ref(false)
const modalType = ref('addUser')
const toggleActivityModal = (type) => {
    modalType.value = type
    activityModal.value = !activityModal.value
}
return { activityModal, toggleActivityModal,modalType }
})