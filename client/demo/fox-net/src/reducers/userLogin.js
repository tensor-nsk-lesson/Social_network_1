export default function userLogin(state = [], action) {
  if (action.type === 'LOGIN_USER'){
    return action.data
  }
  return state;
}
