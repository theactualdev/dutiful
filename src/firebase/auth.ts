import { auth } from "./firebase";
import { createUserWithEmailAndPassword, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export const doCreateUserWithEmailandPassword = async (email : any, password : any) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = async(email : any, password : any) => {
    return signInWithEmailAndPassword(auth, email, password);
};

export const dosignWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    // result.user
    return result
};

export const doSignOut = () => {
    return auth.signOut();
}

export const doPasswordReset = (email : any) => {
    return sendPasswordResetEmail(auth, email);  
}