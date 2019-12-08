function loadVars(){
    onClicked = true;
   
    
}

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

//   function editOrder(button){
    
//     if(onClicked){
//       onClicked = false;
//       button = document.getElementById("edit bio")
//       button.value = "Close Edit"


//       document.getElementById("locspan").className = 'hidden';
//       document.getElementById("biospan").className = 'hidden';
//       document.getElementById("usrspan").className = 'hidden';

//       document.getElementById("bio").className = 'unhidden';
//       document.getElementById("location").className = 'unhidden';
//       document.getElementById("usrname").className = 'unhidden';

//     }
//     else{
//       onClicked = true;
//       button = document.getElementById("submit edit")
//       button.value = "Edit Order"

//       db.collection('Users').doc().where("UID", "==", user.UID).set({
//         usrname: username,
//         location: userlocation,
//         bio: userbio
//       },{merge: true})



//       document.getElementById("locspan").className = 'unhidden';
//       document.getElementById("biospan").className = 'unhidden';
//       document.getElementById("usrspan").className = 'unhidden';

//       document.getElementById("bio").className = 'hidden';
//       document.getElementById("location").className = 'hidden';
//       document.getElementById("usrname").className = 'hidden';
          
     
//     }
      
//   }

  auth.onAuthStateChanged(user => {
    if(user != null){
        usrUID = user.email
        console.log(usrUID)
        db.collection('Users').where("UID", "==", usrUID).get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                console.log(doc.data().location)
                document.getElementById("locspan").outerHTML = "  " + doc.data().location;
                document.getElementById("biospan").outerHTML = "  " + doc.data().bio;
                document.getElementById("usrspan").outerHTML = "  " + usrUID;
                
            
            }) 
        })
    }
  })

  
