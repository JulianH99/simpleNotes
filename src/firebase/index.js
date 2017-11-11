import Firebase from 'firebase'

// requiring firestore for side effects
require('firebase/firestore')

const COLLECTION = 'notes'

var config = {
    apiKey: "AIzaSyAZns4JSL4sUaYIVrVBhvkgb-UxRB640v8",
    authDomain: "keep-clone-515ed.firebaseapp.com",
    databaseURL: "https://keep-clone-515ed.firebaseio.com",
    projectId: "keep-clone-515ed",
    storageBucket: "keep-clone-515ed.appspot.com",
    messagingSenderId: "542261871956"
};

Firebase.initializeApp(config)

var db = Firebase.firestore()

export default db.collection(COLLECTION);