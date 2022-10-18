import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

firebase.initializeApp( {
  apiKey: "AIzaSyBvU_SW2rUBxisPv0s9GgJ-PNccm9XSi9s",
  authDomain: "chat-react-f6f87.firebaseapp.com",
  projectId: "chat-react-f6f87",
  storageBucket: "chat-react-f6f87.appspot.com",
  messagingSenderId: "614781034939",
  appId: "1:614781034939:web:8563c8a34a875d0515e49e",
  measurementId: "G-QNNN5MEML2"
})

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Context.Provider value={{
      firebase,
      auth,
      firestore
    }}>
      <App />
    </Context.Provider>
)

