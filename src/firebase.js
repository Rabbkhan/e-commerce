import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDX43zQVaf3t-Hb9Gqap_JUSumjpZmNPcM",
    authDomain: "ecommerce-cd6ca.firebaseapp.com",
    projectId: "ecommerce-cd6ca",
    storageBucket: "ecommerce-cd6ca.appspot.com",
    messagingSenderId: "69764008124",
    appId: "1:69764008124:web:a70f2339a221e455a3a8b9",
    databaseURL: 'https://ecommerce-cd6ca-default-rtdb.firebaseio.com/',
  };
  export const app = initializeApp(firebaseConfig);