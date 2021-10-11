import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBoQpw4aCIC8gaIZa7jLUVUEihrJWW3Zfk",
  authDomain: "snapchat-clone-alex.firebaseapp.com",
  projectId: "snapchat-clone-alex",
  storageBucket: "snapchat-clone-alex.appspot.com",
  messagingSenderId: "476023582821",
  appId: "1:476023582821:web:a06fdad4462768091a168c"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const storage = firebase.storage()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { db, auth, storage, provider }