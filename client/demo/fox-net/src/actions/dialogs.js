export function dialogsSuccsess(data){
  return {
    type: 'DIALOGS_FETCH_SUCCESS',
    data
  }
}

export function getDialogs(url){
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
      .then(data => dispatch(dialogsSuccsess(data)))
  }
}
