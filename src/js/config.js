// Firebase App is always required and must be first
export var firebase = require("firebase/app");

// Initialize Firebase
// this is an object
export var config = {
  apiKey: "AIzaSyAbmqqvqYhXT8CJCJpQoijczSs05Yn9zDw",
  authDomain: "techlaunch-chat.firebaseapp.com",
  databaseURL: "https://techlaunch-chat.firebaseio.com",
  projectId: "techlaunch-chat",
  storageBucket: "techlaunch-chat.appspot.com",
  messagingSenderId: "619505157438"
};

//firbase is a class that takes the config object
firebase.initializeApp(config);

// export default config;
export default firebase;