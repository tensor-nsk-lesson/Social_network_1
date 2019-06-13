export default function user(state = [], action) {
  if (action.type === 'ADD_USER'){
    console.log(`Данные о регистрации пользователя:\n
      Имя:${action.data.name}\n
      Мэил:${action.data.email}\n
      День рождения:${action.data.date}\n
      Пароль:${action.data.password}`)
    return action.data
  }
  return state;
}
