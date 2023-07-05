import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useMemberStore = defineStore('useMemberStore', () => {
    const member = ref([])

    const setMember = (data) => {
        member.value = data        
    }
    const handleMember = () => {
        const memberProfile = {
            accesTime: member.value.accesTime,
            accesType: member.value.accesType,
            adress: member.value.adress,
            birthDate: member.value.birthDate,
            code: member.value.code,
            discount: member.value.discount,
            name: member.value.name,
            photo: member.value.photo,
        }
        return memberProfile
        }
    return {member,setMember,handleMember}
})