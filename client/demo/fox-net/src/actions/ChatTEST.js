export const initialItems = (res) => ({
  type: "INITIAL_ITEMS",
  items: res
})


export const loadInitialDataSocket = (socket) => {
  return (dispatch) => {
    socet.on('initialList', (res) =>{
      console.dir(res)
      dispatch(initialItems(res))
    })
  }
}
