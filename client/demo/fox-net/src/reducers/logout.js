export default function logout(state = '', action) {
  switch (action.type) {
    case 'LOGOUT_SUCCESS':
      return state
      break;
    default:
    return state;
  }
}
