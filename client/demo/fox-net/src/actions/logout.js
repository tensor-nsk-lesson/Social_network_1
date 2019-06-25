export function logoutSuccsess(data){
  localStorage.removeItem('login')
  return {
    type: 'LOGOUT_SUCCESS',
    data
  }
}

export function logout(url){
  return (dispatch)=>{
    fetch(url,  {method: 'GET'})
      .then(response =>{
        if(!response.ok){
          throw new Error(response.statusText)
        }
        return response;
      })
      .then(response=> response.json())
      .then(data => dispatch(logoutSuccsess(data)))
  }
}
