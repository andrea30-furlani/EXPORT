// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import AsyncStorage from "@react-native-async-storage/async-storage"

import { initializeAuth, getReactNativePersistence } from "firebase/auth/react-native";

const firebaseConfig = {
  apiKey: "AIzaSyCnP6Qi3MVMy6brQgoy_Y_pK662Dci2FKM",
  authDomain: "app-fatec-1ce93.firebaseapp.com",
  projectId: "app-fatec-1ce93",
  storageBucket: "app-fatec-1ce93.appspot.com",
  messagingSenderId: "320077527302",
  appId: "1:320077527302:web:35cb3e87761803eaa40687",
  measurementId: "G-PVR9J37P6B"
};


// import {
//   API_KEY,
//   AUTH_DOMAIN,
//   PROJECT_ID,
//   STORARE_BUCKET,
//   MESSAGING_SENDER_ID,
//   APP_ID,
//   MEASUREMENT_ID,
// } from "@env"


// const firebaseConfig = {
//   apiKey: API_KEY,
//   authDomain: AUTH_DOMAIN,
//   projectId: PROJECT_ID,
//   storageBucket: STORARE_BUCKET,
//   messagingSenderId: MESSAGING_SENDER_ID,
//   appId: APP_ID,
//   measurementId: MEASUREMENT_ID
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// retirn não vamos utilizar
// const analytics = getAnalytics(app);

const auth = initializeAuth(app, { persistence: getReactNativePersistence(AsyncStorage) })

export { auth } ;
