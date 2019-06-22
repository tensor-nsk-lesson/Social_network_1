export default function messagesList(state = [], action){
  switch (action.type) {
    case "MESSAGE_FETCH":
      return action.data
      break;
    default:
      return state;
  }
}
