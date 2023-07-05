import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('useUserStore', () => {
    const user = ref({
        isLogged: false,
        data: null
    })

    const setLogged = (logged: boolean) => {
        user.value.isLogged = logged
    }
    const setUser = (data: any) => {
        user.value.data = data
    }

    const logout = () => {
        user.value.isLogged = false
        user.value.data = null
    }
    return { user,setLogged,setUser,logout }
})