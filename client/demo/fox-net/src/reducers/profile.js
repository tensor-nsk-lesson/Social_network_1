export default function profile(state = [], action){
  switch (action.type) {
    case "PERSON_FETCH_PROFILE":
      return action.data
      break;
    default:
      return state;
  }
}
