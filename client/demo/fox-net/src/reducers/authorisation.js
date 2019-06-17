export default function authorisation(state = [], action){
  switch (action.type) {
    case 'LOGIN_USER_SUCCESS':
      return action.key
      break;
    default:
      return state;
  }
}
