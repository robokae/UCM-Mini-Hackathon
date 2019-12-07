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



function loadPost(doc){
    let name = document.createElement('span');
    let date = document.createElement('span');
    let post = document.createElement('span');

    name = doc.data().usrname;
    date = doc.data().time;
    post = doc.data().message;

    let div = document.createElement('div');
    let maindiv = document.getElementById('posting-section');

    div.innerHTML += (
    '<div class="post">' +
        '<div class="post-details">' +
            '<span class="profile-picture">' +
                '<i class="fas fa-user-circle"></i>' +
            '</span>' +
            name + 
            date +
          '</div>' +
    
        '<div class="post-content">' +
          post +
        '</div>'+
    '</div>'
    )
    maindiv.append(div);



}

//loads info from database
db.collection('Posts').get().then((snapshot) => {
snapshot.docs.forEach(doc => {
    loadPost(doc);
    

}) 
})


// //logout functionality
// const logout = document.querySelector('#logout');
// logout.addEventListener('click', (e)=>{
//   e.preventDefault();
//   auth.signOut().then(()=>{
//     console.log("user signed out")
//   })
  
// })

//auth status change listener
auth.onAuthStateChanged(user => {
    if(user == null){
      window.location.href = "../Signin Page/signin.html";
    }
    
    console.log(user);
  })