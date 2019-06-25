export default function registration(state = [], action){
  switch (action.type) {
    case 'REGISTRATION_USER_SUCCESS':
      return action.data
      break;
    case 'WRONG_DATA_REGISTRATION':
      return { ...state, passError:action.text}
    default:
      return state;
  }
}
