import { ref } from "vue";
import { auth, db } from "@/firebase/settings"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection, query, where, getDocs, doc, setDoc } from "firebase/firestore";

const error = ref("");

const signup = async (email: string, password: string, displayName: string, code: number) => {
    error.value = "";

    try {
        const orgQuery = query(collection(db, "organizations"), where("code", "==", code));        
        const orgSnapshot = await getDocs(orgQuery);
        
        if (orgSnapshot.empty) {
            throw new Error('Invalid code')
        }

        const orgDoc = orgSnapshot.docs[0];


        const userCredential = await createUserWithEmailAndPassword(auth, email, password, displayName);
        if (!userCredential) {
            throw new Error('Could not complete signup')
        }

        const user = userCredential.user;
        error.value = "";
        const userData = {
            organizationId: orgDoc.id,
            displayName: displayName,
            email: email,
            avatar: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
            
          };
          
          // Create a new document for the user in the users collection
          const userDocRef = doc(db, 'users', user.uid);
          await setDoc(userDocRef, userData);
          
          console.log('User registered successfully to the organization.');
          console.log('Organization ID:', orgDoc.id);

        return userCredential;

    } catch (err: unknown) {
        console.log(err.message);
        error.value = err.message;
    }
}

const useSignup = () => {
    return { error, signup };
}

export default useSignup;
