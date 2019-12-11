

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
db.collection('Posts').orderBy("time", "desc").get().then((snapshot) => {
snapshot.docs.forEach(doc => {
    loadPost(doc);
    

}) 
})


//logout functionality
function logoutbtn(){
    
  auth.signOut().then(()=>{
    console.log("user signed out")
  })
  
}

function postbutton(){
  window.location.href = "../PostPage/postpage.html";
  
}
function accountbutton(){
    window.location.href = "../Account Page/accountpage.html";
    
  }



//auth status change listener
auth.onAuthStateChanged(user => {
    if(user == null){
      window.location.href = "../Signin Page/signin.html";
    }
    
    console.log(user);
  })
