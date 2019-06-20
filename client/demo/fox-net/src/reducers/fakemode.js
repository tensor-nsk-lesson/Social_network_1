export default function fakemode(state = '', action) {
  switch (action.type) {
    case 'FAKEMOD_TOGGLE':
      return action.status
      break;
    default:
    return state;
  }
}
