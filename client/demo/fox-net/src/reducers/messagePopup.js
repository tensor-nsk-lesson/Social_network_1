export default function messagePpopup(state = [], action) {
  switch (action.type) {
    case 'TOGGLE_MESSAGE_POPUP':
      return action;
      break;
    default:
    return state;
  }
}
