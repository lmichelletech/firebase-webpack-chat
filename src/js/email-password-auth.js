import $ from 'jquery';
import firebase from './config';
import navigate from './navigator'
import buildSignInScreen from './components/screens/auth/SignInScreen';
import buildSignUpScreen from './components/screens/auth/SignUpScreen';
import validation from './validation';

require('firebase/app');
require('firebase/auth');
require('firebase/database');
require('firebase/storage');

function signUp() {
    var username = $('#username').val();
    let email = $('#email').val();
    let password = $('#password').val();
    let passwordConfirmation = $('#password_confirmation').val();
    var storage = firebase.storage();

    console.log('name ', username);
    console.log('email auth ', email);
    console.log('password auth ', password);
    console.log('confirmation auth ', passwordConfirmation);

    if (!validation.isValidEmail(email)) {
        alert('Invalid Email');
    }
    else if (!validation.isValidPassword(password)) {
        alert('Invalid Password');
    }
    else if (password !== passwordConfirmation) {
        alert('Passwords do not match');
    }
    else {
        console.log('name -------------------?????', username);
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function (result) {
                console.log("result ", result);
                var user = firebase.auth().currentUser;
                console.log("user ", user);
                var imgURL = uploadFile(user);
                console.log('imgURL >>>>>>>>>>>>>  ', imgURL);

                // Updates the user attributes:
                user.updateProfile({
                    displayName: username
                }).then(function () {
                    // Profile updated successfully!
                    var displayName = user.displayName;
                }, function (error) {
                    // An error happened.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log("Unable to update profile. " + error);
                });

            })
            .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log("Unable to email/password authorize user. " + error);
            });
    }
}

function emailAndPasswordAuth() {
    let email = $('#email').val();
    let password = $('#password').val();

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        alert("firebase email/password authorization error: " + errorMessage);
    });
}

function uploadFile(user) {

    // Get file name
    var filename = selectedFile.name;
    // Create file path
    var imgPath = ('images/' + filename + '_' + user.uid);
    // Create fire base storage reference
    var storageRef = firebase.storage().ref(imgPath);
    // Upload file to firebase storage
    var uploadTask = storageRef.put(selectedFile);
    // After upload access the file to grab the download URL
    uploadTask.on('state_changed', function (snapshot) {
        var storage = firebase.storage();
        var storageRef = storage.ref();
        var spaceRef = storageRef.child(imgPath);
        var imageUrl = spaceRef.getDownloadURL().then((url) => {
            console.log('URL >>>>>>>>>>>>>  ', url);

            user.updateProfile({
                photoURL: url
            }).then(function () {
                var photoURL = user.photoURL;
            }, function (error) {
                // An error happened.
            });

            return url;
        }).catch(function (error) {

        });

    }, function (error) {

    });
}

export default {emailAndPasswordAuth, signUp};