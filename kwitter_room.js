
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
      apiKey: "AIzaSyAQ4_Q3jem0gsDfMi3Hr5rq8zMRvS1UY8M",
      authDomain: "kwitter-kaveer.firebaseapp.com",
      projectId: "kwitter-kaveer",
      storageBucket: "kwitter-kaveer.appspot.com",
      messagingSenderId: "383194395543",
      appId: "1:383194395543:web:0124a50956c602a4c90ad2"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
