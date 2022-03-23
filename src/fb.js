import firebase from "firebase/app";

import "firebase/auth";
firebase.initializeApp({
  apiKey: process.env.VUE_APP_APIKEY,
  authDomain: process.env.VUE_APP_AUH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_ST_BUCKET,
  messagingSenderId: process.env.VUE_APP_SENDER,
  appId: process.env.VUE_APP_ID,
  measurementId: process.env.VUE_APP_MEAS_ID,
});
export default firebase;
