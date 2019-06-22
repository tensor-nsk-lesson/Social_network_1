export default function authorisation(state = [], action){
  switch (action.type) {
    case 'LOGIN_USER_SUCCESS':
      return action.data
      break;
    default:
      return state;
  }
}
