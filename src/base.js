import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAx36mC5d-ZY0m_SvO16wTbyesKov2B0KQ',
  authDomain: 'recette-a7893.firebaseapp.com',
  databaseURL: 'https://recette-a7893.firebaseio.com'
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
