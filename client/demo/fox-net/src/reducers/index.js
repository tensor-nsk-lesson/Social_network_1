import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import user from './user';
import userLogin from './userLogin';
import messagesList from './messages';
import popup from './popup'
import authorisation from './authorisation'
import registration from './registration'
import profile from './profile'
import dialogs from './dialogs'

export default combineReducers({
  routing: routerReducer,
  user,
  userLogin,
  messagesList,
  popup,
  authorisation,
  registration,
  profile,
  dialogs
})
