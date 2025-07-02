
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  import { getAuth } from "firebase/auth";
  const firebaseConfig = {
    apiKey: "AIzaSyAooNKYB7TfSveBRmhyHWlRvWvCYOq7cAs",
    authDomain: "selfproject2-a7172.firebaseapp.com",
    projectId: "selfproject2-a7172",
    storageBucket: "selfproject2-a7172.firebasestorage.app",
    messagingSenderId: "887785221093",
    appId: "1:887785221093:web:945be70da02537fba21d0c"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);



const input_email=document.getElementById('input_email').value;
const input_password=document.getElementById('input_password').value;
const button_lgoin=document.getElementById('button_login');
button_lgoin.addEventListener("click",function(event){
  event.preventDefault()
  alert("login berhasil")
  
})