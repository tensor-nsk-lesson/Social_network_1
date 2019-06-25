export function dialogSuccsess(data){
  return {
    type: 'DIALOG_FETCH_SUCCESS',
    data
  }
}

export function createDialog(url){
  return (dispatch)=>{
    fetch(url,  {method: 'GET'})
      .then(response =>{
        if(!response.ok){
          throw new Error(response.statusText)
        }
        return response;
      })
      .then(response=> response.json())
      .then(data => dispatch(dialogSuccsess(data)))
  }
}
