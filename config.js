import firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
  apiKey: "AIzaSyAtyu5jricnMgnjYZgdDkdAtIndViWF1tw",
  authDomain: "story-hub-1ed3b.firebaseapp.com",
  projectId: "story-hub-1ed3b",
  storageBucket: "story-hub-1ed3b.appspot.com",
  messagingSenderId: "124243248788",
  appId: "1:124243248788:web:38fe48d6b2cfc20a6f1681"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()