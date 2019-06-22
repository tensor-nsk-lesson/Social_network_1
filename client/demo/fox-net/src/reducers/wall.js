export default function wall(state = [], action) {
  switch (action.type) {
    case 'PERSON_WALL_FETCH':
      return action.data;
      break;
    default:
    return state;
  }
}
