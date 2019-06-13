import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import user from './user';
import userLogin from './userLogin';
import dialog from './dialog';
import messagesList from './messages';
import popup from './popup'

export default combineReducers({
  routing: routerReducer,
  user,
  userLogin,
  dialog,
  messagesList,
  popup
})
