import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import user from './user';
import userLogin from './userLogin';
import messagesList from './messages';
import profilePopup from './profilePopup';
import messagePopup from './messagePopup';
import authorisation from './authorisation';
import registration from './registration';
import profile from './profile';
import dialogs from './dialogs';
import wall from './wall';
import fakemode from './fakemode';

export default combineReducers({
  routing: routerReducer,
  user,
  userLogin,
  messagesList,
  profilePopup,
  messagePopup,
  authorisation,
  registration,
  profile,
  dialogs,
  fakemode,
  wall
})
