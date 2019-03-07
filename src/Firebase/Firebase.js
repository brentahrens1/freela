import Firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/storage'

  const config = {
    apiKey: "AIzaSyD5RPQdXevJHEPP3kR5w01p-daqNLo7n7A",
    authDomain: "freela-project5.firebaseapp.com",
    databaseURL: "https://freela-project5.firebaseio.com",
    projectId: "freela-project5",
    storageBucket: "freela-project5.appspot.com",
    messagingSenderId: "861077771412"
  };

  Firebase.initializeApp(config);

  const db = Firebase.firestore()
  const auth = Firebase.auth()
  const storage = Firebase.storage()

  export {
      db,
      auth,
      storage
  }

  export default Firebase 