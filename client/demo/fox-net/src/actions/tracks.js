let mockApiData = [
  {
    id:1,
    name: 'LALOW'
  },
  {
    id:2,
    name: 'HOLE'
  },
  {
    id:3,
    name: 'World'
  },
  {
    id:4,
    name: 'Under my knees'
  }
]

export const getTracks = () => dispatch => {
    setTimeout(()=>{
      console.log('I got tracks');
      dispatch({type: 'FETCH_TRACKS_SUCCESS', playload: mockApiData })
    },2000)
}
