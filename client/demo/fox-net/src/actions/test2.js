export function testing(url, json){
  fetch(url, {method: 'post'})
    .then(json)
}
