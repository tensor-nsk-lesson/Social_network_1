export default function logout(state = [], action) {
  switch (action.type) {
    case 'LOGOUT_SUCCESS':
      return action.data
      break;
    default:
    return state;
  }
}
