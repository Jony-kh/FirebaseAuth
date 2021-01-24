import firebase from "firebase"
import { firebaseConfig } from '../constants/config'

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebaseApp.auth();