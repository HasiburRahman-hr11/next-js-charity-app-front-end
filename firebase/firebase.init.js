import { initializeApp, getApps , getApp } from "firebase/app"
import firebaseConfig from "./firebase.config";

const initializeFirebase = () => {
    if (!getApps().length) {
        initializeApp(firebaseConfig)
    }

}
export default initializeFirebase;