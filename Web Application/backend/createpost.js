

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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();


function uploadPost(){
  let name = document.getElementById
  let date = now();
  let post = document.getElementById


    db.collection('Posts').doc().set({
      usrname: name.value,
      time: date,
      message: post.value
    });

}


// //logout functionality
// const logout = document.querySelector('#logout');
// logout.addEventListener('click', (e)=>{
//   e.preventDefault();
//   auth.signOut().then(()=>{
//     console.log("user signed out")
//   })

// })

// auth status change listener
// auth.onAuthStateChanged(user => {
//   if(user == null){
//     window.location.href = "../Signin Page/signin.html";
//   }
  
//   console.log(user);
// })