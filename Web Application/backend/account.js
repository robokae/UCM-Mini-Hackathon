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

  function editOrder(){
    
    if(onClicked){
      onClicked = false;
      button = document.getElementById("editorder")
      button.innerHTML = "Close Edit"

    }
    else{
      onClicked = true;
      button = document.getElementById("editorder")
      button.innerHTML = "Edit Order"

      db.collection('Users').doc().where("UID", "==", user.UID).set({
        usrname: username,
        location: userlocation,
        bio: userbio
      },{merge: true})
          
     
    }
      
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

  
