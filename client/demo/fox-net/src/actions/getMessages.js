export function getMessagesSuccsess(data){
  localStorage.removeItem('login')
  return {
    type: "GET_MESSAGES",
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
      .catch()
      .then(response=> response.json())
      .then(data => dispatch(getMessagesSuccsess(data)))
  }
}
