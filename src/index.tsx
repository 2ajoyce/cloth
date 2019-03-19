import React from 'react'
import ReactDOM from 'react-dom'
import firebase from 'firebase'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

// Initialize Firebase
var config = {
    apiKey: 'AIzaSyDYW2G2flGcndvxbHGdQTyLV4Mt9KRYUV8',
    authDomain: 'cloth-88267.firebaseapp.com',
    databaseURL: 'https://cloth-88267.firebaseio.com',
    projectId: 'cloth-88267',
    storageBucket: 'cloth-88267.appspot.com',
    messagingSenderId: '167429453628'
}
firebase.initializeApp(config)

ReactDOM.render(<App/>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

