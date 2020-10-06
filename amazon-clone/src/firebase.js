import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmNYR9342KTc8UQdganNGaNgxQQe3q_DQ",
  authDomain: "clone-37920.firebaseapp.com",
  databaseURL: "https://clone-37920.firebaseio.com",
  projectId: "clone-37920",
  storageBucket: "clone-37920.appspot.com",
  messagingSenderId: "757144114769",
  appId: "1:757144114769:web:f49c69c2dc52df60514a70",
  measurementId: "G-XTY9G9JSJB",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export { auth };
