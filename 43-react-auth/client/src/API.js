import { baseUrl } from './config'

const signInUrl = baseUrl + '/signin'

const get = url => fetch(url).then(resp => resp.json())

const post = (url, data) =>
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(resp => resp.json())

const signIn = (username, password) => post(signInUrl, { username, password })

export default {
  signIn
}
