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


// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);


});


//Code for the sign up fuctionality
signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = signUpForm['email-signup']
  const password = signUpForm['password-signup']

})