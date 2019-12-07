const firebaseConfig = {
  apiKey: "AIzaSyCzM5btiHZBnFWXpcWRfe0fD7J_6uLdoQI",
  authDomain: "eevent-10adf.firebaseapp.com",
  databaseURL: "https://eevent-10adf.firebaseio.com",
  projectId: "eevent-10adf",
  storageBucket: "eevent-10adf.appspot.com",
  messagingSenderId: "691801299872",
  appId: "1:691801299872:web:22c330ae3b6c13f411a2c5",
  measurementId: "G-P2G2BLQNRK"
};
//initialize firebase
firebase.initializeApp(firebaseConfig);

//auth firebase refs
const db = firebase.firestore();
const auth = firebase.auth();


//signup or create new user functionality
const signUpForm = document.querySelector('#signUpForm');
//Code for the sign up fuctionality
signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = signUpForm['email-signup'].value
  const password = signUpForm['password-signup'].value

  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    
    signUpForm.reset();
  });

})





//login functionaility 
const loginform = document.querySelector('#loginForm');
loginform.addEventListener('submit', (e)=>{
  console.log("hello")
  e.preventDefault();

  const email = loginform['email-signin'].value
  const password = loginform['password-signin'].value

  auth.signInWithEmailAndPassword(email, password).then(cred => {
    console.log(cred.user);

    //close login modal
    loginform.reset();

  })
  
})


//auth status change listener
auth.onAuthStateChanged(user => {
  if(user != null)
    window.location.href = "../Home Page/index.html";
  

  console.log(user);
})