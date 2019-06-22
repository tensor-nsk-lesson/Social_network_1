export default function fakemode(state = '', action) {
  switch (action.type) {
    case 'FAKEMOD_TOGGLE':
      return action
      break;
    default:
    return state;
  }
}
