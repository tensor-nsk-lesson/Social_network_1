export default function registration(state = [], action){
  switch (action.type) {
    case 'REGISTRATION_USER_SUCCESS':
      return action
      break;
    default:
      return state;
  }
}
