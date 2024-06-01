import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


    const firebaseConfig = {
        apiKey: "AIzaSyCOo8h6d4wqI4Js9runfIbU5WiwN3it-8I",
        authDomain: "checkpoint3-7a5d3.firebaseapp.com",
        projectId: "checkpoint3-7a5d3",
        storageBucket: "checkpoint3-7a5d3.appspot.com",
        messagingSenderId: "899545577278",
        appId: "1:899545577278:web:87f5e141167e5d45829e6f"
      };


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

