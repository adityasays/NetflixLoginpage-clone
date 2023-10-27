<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBzEgpclgq1eero5XRqH2k5JJ0wCU32Bvg",
    authDomain: "netflix-clone-a35d0.firebaseapp.com",
    projectId: "netflix-clone-a35d0",
    storageBucket: "netflix-clone-a35d0.appspot.com",
    messagingSenderId: "518859426031",
    appId: "1:518859426031:web:b7e9b9233c48407c83b31a"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

  document.getElementById("signup").addEventListener("click", function() {
    var email =  document.getElementById("email1").value;
    var password = document.getElementById("pass1").value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      alert("Registration successful!!");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      alert(error.message);
    });		  		  
  });

  // Login code start	  
  document.getElementById("login").addEventListener("click", function() {
    var email =  document.getElementById("email2").value;
    var password = document.getElementById("pass2").value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      alert(user.email + " Login successful!!!");
      document.getElementById('logout').style.display = 'block';
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      alert(errorMessage);
    });		  		  
  });
</script>
