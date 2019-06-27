export function addInDialogSuccess(data){
  return {
    type: 'LOGIN_USER_SUCCESS',
    data
  }
}

export function addInDialog(url, data){
  return (dispatch) => {
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
    .then(response => response.json())
    .then(data => dispatch(addInDialogSuccess(data)))
  }
}
