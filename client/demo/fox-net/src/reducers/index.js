import {combineReducers} from 'redux';
import user from './user';
import userLogin from './userLogin'
import dialog from './dialog'
import messagesList from './messages'

export default combineReducers({
  user,
  userLogin,
  dialog,
  messagesList
})
