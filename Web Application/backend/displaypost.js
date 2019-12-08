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
    name.className = "name";
    let date = document.createElement('span');
    date.className = "date";
    dateObj = doc.data().time.toDate();

    name = "  " + doc.data().usrname;
    date = (dateObj.getMonth()+1).toString() + "/" + dateObj.getDate().toString()  + "/" +  dateObj.getFullYear().toString();
    post = doc.data().message;

    let tr = document.createElement('tr');
    let table = document.getElementById('posting-section');

    tr.innerHTML += (
    '<div class="post">' +
        '<div class="post-details">' +
            '<span class="profile-picture">' +
                '<i class="fas fa-user-circle"></i>' +
            '</span>' +
            '<span class="name">' + name + '</span>'+
              '<span class="date">' + date + '</span>'+

          '</div>' +
    
        '<div class="post-content">' +
          post +
        '</div>'+
    '</div>'
    )
    tr.className = "post";
    table.append(tr);



}

//loads info from database
db.collection('Posts').get().then((snapshot) => {
snapshot.docs.forEach(doc => {
    loadPost(doc);
    

}) 
})


//logout functionality
const logout = document.getElementById('logout-button');
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