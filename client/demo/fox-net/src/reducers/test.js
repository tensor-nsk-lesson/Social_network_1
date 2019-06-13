export default function persons(state = [], action){
  switch (action.type) {
    case 'PERSONS_FETCH_DATA_SUCCESS':
      return action
      break;
    default:
      return state;
  }
}
