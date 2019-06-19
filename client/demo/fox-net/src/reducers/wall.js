export default function wall(state = [], action) {
  switch (action.type) {
    case 'PERSON_WALL_FETCH':
      return action;
      break;
    default:
    return state;
  }
}
// export function wallSuccess(data){
//   return {
//     type: 'PERSON_WALL_FETCH',
//     data
//   }
// }
//
// export function getWall(url){
//   return (dispatch)=>{
//     fetch(url,  {method: 'GET'})
//       .then(response =>{
//         if(!response.ok){
//           throw new Error(response.statusText)
//         }
//         return response;
//       })
//       .then(response=> response.json())
//       .then(data => dispatch(wallSuccess(data)))
//   }
// }
