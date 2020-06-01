import { combineReducers } from 'redux';
import authReducer from './authReducer';
import organizerReducer from './organizerReducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  organizer: organizerReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
