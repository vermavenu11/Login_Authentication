firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log("User logged in!");
    window.location.href = 'dash.html';
  } else {
    // No user is signed in.
  }
});


function login(){


  email = document.getElementById('signin-email').value;
  password = document.getElementById('signin-pass').value;

  console.log("Loging in with email: " + email);

  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
    
  });
}

function signup(){

  email = document.getElementById('signupEmail').value;
  password = document.getElementById('signupPass').value;

  console.log("Creating user with email: "+email)

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    alert(errorMessage);
    });
}