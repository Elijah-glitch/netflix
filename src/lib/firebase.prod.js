import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
     apiKey: "AIzaSyA74ZvfzfZVmopLVsbl88Y02CUaXNWGgwk",
  authDomain: "roblox-29707.firebaseapp.com",
  projectId: "roblox-29707",
  storageBucket: "roblox-29707.appspot.com",
  messagingSenderId: "1025034692104",
  appId: "1:1025034692104:web:628690bd4a9e9bf83293bd",
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment
// this so you don't get duplicate data

export { firebase };
