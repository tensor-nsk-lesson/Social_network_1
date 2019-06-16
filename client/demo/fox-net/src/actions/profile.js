export function personSuccess(data){
  return {
    type: 'PERSON_FETCH_PROFILE',
    data
  }
}

export function getProfile(url){
  return (dispatch)=>{
    fetch(url,  {method: 'GET'})
      .then(response =>{
        if(!response.ok){
          throw new Error(response.statusText)
        }
        return response;
      })
      .then(response=> response.json())
      .then(data => dispatch(personSuccess(data)))
  }
}
