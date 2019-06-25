export default function profilePpopup(state = [], action) {
  switch (action.type) {
    case 'CHANGE_SETTINGS_SUCCESS':
      return action.data;
      break;
    default:
    return state;
  }
}
