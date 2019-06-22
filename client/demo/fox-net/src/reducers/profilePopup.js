export default function profilePpopup(state = [], action) {
  switch (action.type) {
    case 'TOGGLE_PROFILE_POPUP':
      return action.data;
      break;
    default:
    return state;
  }
}
