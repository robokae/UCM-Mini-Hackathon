



// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();



function uploadPost(){
  
  var user = firebase.auth().currentUser.email;
  dateadded = firebase.firestore.FieldValue.serverTimestamp()
  let post = document.getElementById('postmessage')


   
  db.collection('Posts').doc().set({
    usrname: user,
    message: post.value,
    time: dateadded

  }).then(function (){
    window.location.href = "../Home Page/index.html";
  });


}

 
