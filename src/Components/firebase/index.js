import firebase from "firebase/compat/app";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyBCPEKMxei3RpbIMviw3aEbL7akc6Fr3vw",
  authDomain: "chat-d43c8.firebaseapp.com",
  projectId: "chat-d43c8",
  storageBucket: "chat-d43c8.appspot.com",
  messagingSenderId: "65122059581",
  appId: "1:65122059581:web:a1bb885b994626e14ff154"
};
const app = firebase.initializeApp(firebaseConfig);
const  db =  getDatabase(); 
export { db,app}