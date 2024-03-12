import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const firebaseConfig = {
    apiKey: "AIzaSyCkqOl4_WLTfirW8DRiHIfZ8_7IsrmSwGY",
    authDomain: "text-correction-d257d.firebaseapp.com",
    projectId: "text-correction-d257d",
    storageBucket: "text-correction-d257d.appspot.com",
    messagingSenderId: "1019406336170",
    appId: "1:1019406336170:web:fbf266086479bc166f10d3",
    measurementId: "G-8ZMJFKNC1T",
  };

  const app = initializeApp(firebaseConfig);

  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const firestore = getFirestore(app);

  nuxtApp.vueApp.provide("auth", auth);
  nuxtApp.provide("auth", auth);

  nuxtApp.vueApp.provide("firestore", firestore);
  nuxtApp.provide("firestore", firestore);
});
