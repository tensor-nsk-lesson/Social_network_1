export default function dialogs(state = [], action) {
  switch (action.type) {
    case 'DIALOGS_FETCH_SUCCESS':
      return action.data
      break;
    default:
    return state;
  }
}
