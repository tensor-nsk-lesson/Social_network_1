export function headerSuccess(data){
  return {
    type: 'HEADER_FETCH_PROFILE',
    data
  }
}

export function getHeader(url){
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
      .then(data => dispatch(headerSuccess(data)))
  }
}
