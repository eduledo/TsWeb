import * as firebase from 'firebase';
import 'firebase/firestore';

var config = {
    apiKey: "AIzaSyADCn9ldl8v4SKddPvp-7ul6AKBTSEdF2E",
    authDomain: "tsmobile-a03c4.firebaseapp.com",
    databaseURL: "https://tsmobile-a03c4.firebaseio.com",
    projectId: "tsmobile-a03c4",
    storageBucket: "tsmobile-a03c4.appspot.com",
    messagingSenderId: "855403826067"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();

let db = firebase.firestore();
firebase.firestore().enablePersistence()
    .then(() => {
        db = firebase.firestore();
    });

export {
    auth,
    db
};
