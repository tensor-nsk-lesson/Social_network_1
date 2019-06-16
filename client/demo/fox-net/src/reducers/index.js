import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import user from './user';
import userLogin from './userLogin';
import dialog from './dialog';
import messagesList from './messages';
import popup from './popup'
import authorisation from './authorisation'
import registration from './registration'
import profile from './profile'

export default combineReducers({
  routing: routerReducer,
  user,
  userLogin,
  dialog,
  messagesList,
  popup,
  authorisation,
  registration,
  profile
})
