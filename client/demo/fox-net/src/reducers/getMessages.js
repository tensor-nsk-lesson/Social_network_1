export default function header(state = [], action){
  switch (action.type) {
    case "GET_MESSAGES":
      return action.data
      break;
    default:
      return state;
  }
}
