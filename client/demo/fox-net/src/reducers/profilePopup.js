export default function profilePpopup(state = [], action) {
  switch (action.type) {
    case 'TOGGLE_PROFILE_POPUP':
      return action.status;
      break;
    default:
    return state;
  }
}
