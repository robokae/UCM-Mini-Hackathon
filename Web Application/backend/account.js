function loadVars(){
    onClicked = true;
   
    
}


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

function backToHome(){
    window.location.href = "../Home Page/index.html";
    
  }

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

  
