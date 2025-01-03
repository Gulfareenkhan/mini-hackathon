import{app} from './firebaseconfig'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


// Firebase configuration
// let auth = getAuth
// const firebaseConfig = {
//     apiKey: "YOUR_API_KEY",
//     authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
//     projectId: "YOUR_PROJECT_ID",
//     storageBucket: "YOUR_PROJECT_ID.appspot.com",
//     messagingSenderId: "YOUR_SENDER_ID",
//     appId: "YOUR_APP_ID",
//   };

 const handlesubmit =() =>{
    createUserWithEmailAndPassword(auth1, document.email, document.password).then( (response)  => {
console.log(response.user)
    })
    .catch((err) =>{
        alert(err.message);
    });

 };

  const auth1 = firebase.auth();

  // Form submission event
  document.getElementById('signup-form').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent page reload
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      const userCredential = await auth1.createUserWithEmailAndPassword(email, password);
      document.getElementById('message').textContent = `User signed up: ${userCredential.user.email}`;
    } catch (error) {
      document.getElementById('message').textContent = `Error: ${error.message}`;
    }
  });