import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB50CWo94jFapgu_GimG8KA-6YKeukat_o",
  authDomain: "dental-park-808f8.firebaseapp.com",
  projectId: "dental-park-808f8",
  storageBucket: "dental-park-808f8.appspot.com",
  messagingSenderId: "642088701281",
  appId: "1:642088701281:web:b9d2f740eba539dae30920"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;