// Your web app's Firebase configuration
var app_firebase = {};
(function () {
    var firebaseConfig = {
        apiKey: "AIzaSyCD_DeU8Q-t_EJMqkaReEGyKbGjrYJvpPk",
        authDomain: "readyrescueapp.firebaseapp.com",
        databaseURL: "https://readyrescueapp.firebaseio.com",
        projectId: "readyrescueapp",
        storageBucket: "readyrescueapp.appspot.com",
        messagingSenderId: "982679448506",
        appId: "1:982679448506:web:6c45f54229ce83afc30b83",
        measurementId: "G-K4T0VT2FD9"
    };
// Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    app_firebase = firebase;

})()









// const auth = firebase.auth();
//
//
// function signUp(){
//
//     var email = document.getElementById("email");
//     var password = document.getElementById("password");
//
//     const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
//     promise.catch(e => alert(e.message));
//     window.open("index.html","_self")
//
//     alert("Signed Up");
// }
//
//
//
// function signIn(){
//
//     var email = document.getElementById("email");
//     var password = document.getElementById("password");
//
//     const promise = auth.signInWithEmailAndPassword(email.value, password.value);
//     promise.catch(e => alert(e.message));
//     window.open("index.html","_self")
//
//
//
//
// }
//
//
// function signOut(){
//
//     auth.signOut();
//     alert("Signed Out");
//     window.open("login.html","_self")
// }
//
//
//
// auth.onAuthStateChanged(function(user){
//
//     if(user){
//
//         var email = user.email;
//         alert("Active User " + email);
//
//         //Take user to a different or home page
//
//         //is signed in
//
//     }else{
//
//         alert("No Active User");
//         // window.open("login")
//         //no user is signed in
//     }
//
//
//
// });