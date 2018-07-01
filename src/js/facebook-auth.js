import firebase from './config';
import navigate from './navigator'
// import buildChatScreen from './components/screens/ChatScreen';

function facebookAuth(){
  //start: this code gotten from my Google firebase account
  var provider = new firebase.auth.FacebookAuthProvider();
  const root = document.getElementById('root');

firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

  //end Facebook provided code
}
export default facebookAuth;