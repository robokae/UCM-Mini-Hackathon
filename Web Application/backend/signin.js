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

    //close login modal
    loginform.reset();

  }).then(function(result) {
    return result.user.updateProfile({
      displayName: document.getElementById("usrname").value
    })
  
})


//auth status change listener
auth.onAuthStateChanged(user => {
  if(user != null)
    window.location.href = "../Home Page/index.html";
})


const logindiv = document.getElementById('login-div')
const signupdiv = document.getElementById('signup-div')
//function to switch from sign up to sign in
function unhide(clickedButton) {
  
  if (clickedButton.value == 'Create New User') {
    logindiv.className = 'hidden';
    signupdiv.className = 'unhidden';
    clickedButton.value = 'Login'
  }
  else{
    logindiv.className = 'unhidden';
    signupdiv.className = 'hidden';
    clickedButton.value = 'Create New User'
  }
}