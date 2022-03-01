
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyD8I0E6x6zgWxhDofN1fxfhCvDTHWluDTI",
    authDomain: "kwitter-by-kaveer.firebaseapp.com",
    databaseURL: "https://kwitter-by-kaveer-default-rtdb.firebaseio.com",
    projectId: "kwitter-by-kaveer",
    storageBucket: "kwitter-by-kaveer.appspot.com",
    messagingSenderId: "1089487351826",
    appId: "1:1089487351826:web:1e608c0c10c59e8824a8cb"   
    };
    
    // Initialize Firebase
//     const app = initializeApp(firebaseConfig);

    firebase.initializeApp(firebaseConfig);

    var username = localStorage.getItem("names");
    document.getElementById("wlcm_h3").innerHTML = "Welcome " + username + "!"

    console.log(username);

    function addroom(){
      var roomname = document.getElementById("room_name").value;
      
      firebase.database().ref("/").child(roomname).update({
            purpose:"addingRoomName"
      });

      localStorage.setItem("roomname", roomname);
      window.location = "kwitter_page.html";
    }



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("roomname - " + Room_names);


      row = "<div class='room_name' id=" + Room_names + " onclick='redirecttoroomname(this.id)'>#" + Room_names + "</div><hr>"
      document.getElementById("output").innerHTML += row; 


      //End code
      });});}

getData();

function logout(){
      localStorage.removeItem("names");
      localStorage.removeItem("roomname");
      window.location="index.html"
}

function redirecttoroomname(name){
      console.log(name);
      localStorage.setItem("roomname", name);
      window.location="kwitter_page.html";
}