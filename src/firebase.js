import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    authDomain: "todo-app-XXXXX.firebaseapp.com",
    databaseURL: "https://todo-app-XXXXX.firebaseio.com",
    projectId: "todo-app-XXXXX",
    storageBucket: "todo-app-XXXXX.appspot.com",
    messagingSenderId: "XXXXXXXXXXX",
    appId: "1:XXXXXXXXXXXX:web:XXXXXXXXXXXXXXXXXXX",
    measurementId: "G-XXXXXXXXXXXXXXXXX"
  }

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export  {db}