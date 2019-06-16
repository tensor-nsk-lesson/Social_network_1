export default function authorisation(state = [], action){
  switch (action.type) {
    case 'LOGIN_USER_SUCCESS':
      return action.key
      break;
    case 'PERSONS_FETCH_DATA_SUCCESS':
      return action
      break;
    default:
      return state;
  }
}
