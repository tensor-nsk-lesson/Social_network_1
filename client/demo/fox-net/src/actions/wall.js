export function wallSuccess(data){
  return {
    type: 'PERSON_WALL_FETCH',
    data
  }
}

export function getWall(url){
  return (dispatch)=>{
    fetch(url,  {method: 'GET'})
      .then(response =>{
        if(!response.ok){
          throw new Error(response.statusText)
        }
        return response;
      })
      .catch()
      .then(response=> response.json())
      .then(data => dispatch(wallSuccess(data)))
  }
}
