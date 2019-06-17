export default function popup(state = [], action) {
  switch (action.type) {
    case 'TOGGLE_POPUP':
      return action.status;
      break;
    default:
    return state;
  }
}
