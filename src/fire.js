import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyCkO1mQokrB2yPXYEeiGIcI5Vi6kh4euGM",
  authDomain: "your-domain-name.firebaseapp.com",
  databaseURL: "http://rohitpersonlist.firebaseio.com",
  storageBucket: "rohitpersonlist.appspot.com",
  messagingSenderId: "1042862099267"
};
var fire = firebase.initializeApp(config);
export default fire;