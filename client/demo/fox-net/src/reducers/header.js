export default function header(state = [], action){
  switch (action.type) {
    case "HEADER_FETCH_PROFILE":
      return action.data
      break;
    default:
      return state;
  }
}
