export default function userLogin(state = [], action) {
  if (action.type === 'LOGIN_USER'){
    console.log(`Данные о входе пользователя:\n
      Email:${action.data.email}\n
      Password:${action.data.password}\n
      Remember: ${action.data.remember}`)
    return action.data
  }
  return state;
}
