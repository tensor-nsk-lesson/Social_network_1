export function friendsSuccess(data){
  return {
    type: 'FRIENDS_FETCH_PROFILE',
    data
  }
}

export function getFriends(url){
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
      .then(data => dispatch(friendsSuccess(data)))
  }
}
