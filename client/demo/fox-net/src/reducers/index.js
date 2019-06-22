import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import userLogin from './userLogin';
import messagesList from './messages';
import profilePopup from './profilePopup';
import messagePopup from './messagePopup';
import authorisation from './authorisation';
import registration from './registration';
import profile from './profile';
import header from './header'
import dialogs from './dialogs';
import friends from './friends';
import wall from './wall';
import fakemode from './fakemode';
import logout from './logout'
export default combineReducers({
  routing: routerReducer,
  userLogin,
  messagesList,
  profilePopup,
  messagePopup,
  authorisation,
  registration,
  profile,
  header,
  dialogs,
  fakemode,
  wall,
  logout
})
