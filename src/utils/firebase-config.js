
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAMtPZRdPeFMWB1m2q5GpLGQuBeE27idDY",
  authDomain: "ysw-netflix-clone.firebaseapp.com",
  projectId: "ysw-netflix-clone",
  storageBucket: "ysw-netflix-clone.appspot.com",
  messagingSenderId: "907938814129",
  appId: "1:907938814129:web:1b26c06238db0a589baa90",
  measurementId: "G-B07ZF6TGSN"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firebaseAuth = getAuth(app)