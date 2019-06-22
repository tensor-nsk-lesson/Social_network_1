export default function fakemode(state = '', action) {
  switch (action.type) {
    case 'FRIENDS_FETCH_PROFILE':
      return action.data
      break;
    default:
    return state;
  }
}
