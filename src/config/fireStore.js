import * as firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

var firebaseConfig = {
    apiKey: "AIzaSyDP28tix4Iusz3IsK7SERvISc02h99Zu2Q",
    authDomain: "redux-chatroom.firebaseapp.com",
    databaseURL: "https://redux-chatroom.firebaseio.com",
    projectId: "redux-chatroom",
    storageBucket: "redux-chatroom.appspot.com",
    messagingSenderId: "47212766581",
    appId: "1:47212766581:web:f1faff5459636e45531f3c",
    measurementId: "G-X53G89NTS0"
  };



firebase.initializeApp(firebaseConfig)
export default firebase.firestore()