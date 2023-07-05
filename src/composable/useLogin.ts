import { ref } from "vue";
import {db, auth } from "@/firebase/settings"
import  {signInWithEmailAndPassword } from "firebase/auth";
import { collection, query, where, getDocs, doc, setDoc } from "firebase/firestore";
import { useUserStore } from "@/stores/UserStore";

const error= ref("");

const login = async (email:string, password:string) => {
    const userStore = useUserStore();
    error.value = "";
    
    try {
    
        const userCredential = await signInWithEmailAndPassword(auth, email, password);

        if (userCredential) {
            const userQuery = query(collection(db, "users"), where("email", "==", email));
            const userSnapshot = await getDocs(userQuery);
            const userOrg = userSnapshot.docs[0].data();
            userStore.setUser(userOrg);
            console.log(userOrg);
            
            userStore.setLogged(true);   
        }

        const res = userCredential.user;
        
        error.value = "";
        return res;
    } catch (err:unknown) {
        console.log(err.message);
        error.value = err.message;
    }
    }

const useLogin = () => {
    return { error, login };
}

export default useLogin;
