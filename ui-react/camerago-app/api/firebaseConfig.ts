import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
// 👇 Đây là dòng quan trọng
// @ts-ignore
import { getReactNativePersistence } from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyBTfPAXa_bn9CnsXJDEpctBl-HV8z_Q_b4",
  authDomain: "camerago-app.firebaseapp.com",
  projectId: "camerago-app",
  storageBucket: "camerago-app.appspot.com",
  messagingSenderId: "893445440610",
  appId: "1:893445440610:web:1f36e5a692724380aa3d3b",
  measurementId: "G-XJMC15TYRD"
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
