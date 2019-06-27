export function messageSuccsess(data){
  return {
    type: 'MESSAGE_FETCH',
    data
  }
}

export function postMessage(url, data){
  return (dispatch)=>{
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
    })
      .then(response =>{
        if(!response.ok){
          throw new Error(response.statusText)
        }
        return response;
      })
      .catch()
      .then(response=> response.json())
      .then(data => dispatch(messageSuccsess(data)))
  }
}
