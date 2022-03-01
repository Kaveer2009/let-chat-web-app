//YOUR FIREBASE LINKS

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
    var roomname = localStorage.getItem("roomname");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function sendmes(){
      message = document.getElementById("input_message").value;
      firebase.database().ref(roomname).push({
            name : username,
            message : message,
            like : 0
      });
      document.getElementById("input_message").innerHTML = "";
}