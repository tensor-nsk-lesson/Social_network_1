export function logoutSuccsess(){
  return {
    type: 'LOGOUT_SUCCESS'
  }
}

export function logout(url){
  return (dispatch)=>{
    fetch(url,  {method: 'GET'})
      .then(data => dispatch(logoutSuccsess()))
  }
}
