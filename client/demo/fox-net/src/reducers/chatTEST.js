export default function chat(state = [], action) {
  switch (action.type) {
    case 'INITIAL_ITEMS':
      return {...state, items: action.items}
    default:
    return state;
  }
}
