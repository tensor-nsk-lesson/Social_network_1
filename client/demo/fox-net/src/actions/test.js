export function testSuccsess(persons){
  return {
    type: 'PERSONS_FETCH_DATA_SUCCESS',
    persons
  }
}

export function test(url){
  return (dispatch)=>{
    fetch(url)
      .then(response =>{
        if(!response.ok){
          console.log(response)
          throw new Error(response.statusText)
        }
        return response;
      })
      .then(response=> response.json())
      .then(persons => dispatch(testSuccsess(persons)))
  }
}
