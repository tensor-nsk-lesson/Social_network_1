export function messageSuccsess(data){
  return {
    type: 'MESSAGE_FETCH',
    data
  }
}

export function getMessages(url){
  return (dispatch)=>{
    fetch(url,  {method: 'GET'})
      .then(response =>{
        if(!response.ok){
          throw new Error(response.statusText)
        }
        return response;
      })
      .then(response=> response.json())
      .then(data => dispatch(messageSuccsess(data)))
  }
}
