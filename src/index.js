import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import { createContext } from 'react';

firebase.initializeApp({
  apiKey: 'AIzaSyAlh-H-NKDkcDtix5D9hVA7dE3ZqUnaKaU',
  authDomain: 'reacjs-offers.firebaseapp.com',
  projectId: 'reacjs-offers',
  storageBucket: 'reacjs-offers.appspot.com',
  messagingSenderId: '1095463749664',
  appId: '1:1095463749664:web:ca8e5b156226c5d655d445',
  measurementId: 'G-YXZL4TNLPP',
});

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <Context.Provider
    value={{
      firebase,
      auth,
      firestore,
    }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
