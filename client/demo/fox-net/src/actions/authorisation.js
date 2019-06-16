export function fetchSuccess(key){
  return {
    type: 'LOGIN_USER_SUCCESS',
    key
  }
}

export function authorisation(url, data){
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
    .then(response => response.json())
    .then(data => dispatch(fetchSuccess(data)))
  }
}


// post('/auth', {login: 'Login', password:'4'})
//   .then(data => console.log(data))      // обрабатываем результат вызова response.json()
//   .catch(error => console.error(error))
//
// function post(url, data) {
//   return fetch(url, {
//     credentials: 'same-origin',  // параметр определяющий передвать ли разные сессионные данные вместе с запросом
//     method: 'POST',              // метод POST
//     body: JSON.stringify(data),  // типа запрашиаемого документа
//     headers: new Headers({
//       'Content-Type': 'application/json'
//     }),
//   })
//   .then(response => response.json()) // возвращаем промис
// }
