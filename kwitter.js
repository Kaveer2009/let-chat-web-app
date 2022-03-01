

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
// const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);


function adduser(){

    var username = document.getElementById("username").value;
    

    localStorage.setItem("names", username);
    window.location="kwitter_room.html";

    
}
