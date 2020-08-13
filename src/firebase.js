import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAP9tZldDKWOdEKaBiF9DkYD7ehMAm8X30",
    authDomain: "todo-app-925d1.firebaseapp.com",
    databaseURL: "https://todo-app-925d1.firebaseio.com",
    projectId: "todo-app-925d1",
    storageBucket: "todo-app-925d1.appspot.com",
    messagingSenderId: "427406109842",
    appId: "1:427406109842:web:119d2f34e321a72a31ca4b",
    measurementId: "G-RVX5TC8B3C"
  }

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export  {db}