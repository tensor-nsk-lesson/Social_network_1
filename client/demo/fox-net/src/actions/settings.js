export function changeSettingsSuccess(data){
  return {
    type: 'CHANGE_SETTINGS_SUCCESS',
    data
  }
}

export function changeSettings(url, data){
  return (dispatch) => {
    return fetch(url, {
      method: 'PUT',
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
    .then(response => response.json())
    .then(data => dispatch(changeSettingsSuccess(data)))
  }
}
