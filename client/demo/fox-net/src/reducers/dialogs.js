export default function dialogs(state = [], action) {
  switch (action.type) {
    case 'DIALOGS_FETCH_SUCCESS':
      return action.data
      break;
    case 'CREATE_DIALOG_SUCCESS':
      return action.data
      break;
    case 'ADD_IN_DIALOG':
      return action.data
    default:
    return state;
  }
}
