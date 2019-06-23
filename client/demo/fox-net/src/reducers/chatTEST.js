export default function chat(state = [], action) {
  switch (action.type) {
    case 'INITIAL_ITEMS':
      return action.item
    default:
    return state;
  }
}
