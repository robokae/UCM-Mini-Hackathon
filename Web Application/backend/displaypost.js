var firebaseConfig = {
    apiKey: "AIzaSyCzM5btiHZBnFWXpcWRfe0fD7J_6uLdoQI",
    authDomain: "hack-m2019.firebaseapp.com",
    databaseURL: "https://hack-m2019.firebaseio.com",
    projectId: "hack-m2019",
    storageBucket: "hack-m2019.appspot.com",
    messagingSenderId: "622912116834",
    appId: "1:622912116834:web:6a8ff889f9eb08ae8f593b",
    measurementId: "G-6SMZPDFM03"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();



function loadPost(doc){
    name = doc.data().usrname;
    date = doc.data().time;
    post = doc.data().message;

    

}

//loads info from database
db.collection('Posts').get().then((snapshot) => {
snapshot.docs.forEach(doc => {
    loadPost(doc);
    

}) 
})


//logout functionality
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e)=>{
  e.preventDefault();
  auth.signOut().then(()=>{
    console.log("user signed out")
  })
  
})

//auth status change listener
auth.onAuthStateChanged(user => {
    if(user == null){
      window.location.href = "../Signin Page/signin.html";
    }
    
    console.log(user);
  })