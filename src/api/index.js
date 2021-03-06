import queryString from 'query-string'

const API_ROOT_LOCAL = 'http://localhost:3000/api/v1'
const API_ROOT_REMOTE = 'https://kleo-server.herokuapp.com'
const API_ROOT = process.env.NODE_ENV === 'production' ? API_ROOT_REMOTE : API_ROOT_LOCAL;

export function requestHandling(params, endpoint) {
  const slash = endpoint[0] === '/' || endpoint[0] === '/' ? '': '/'
  return fetch(API_ROOT + slash + endpoint + '?' + queryString.stringify(params))
    .then(resp => ({ json: resp.json(), resp }))
    .then(({json, resp}) => {
      if (!resp.ok) {
        return Promise.reject(json)
      }
      return json
    })
    .then(resp => ({resp}))
    .catch(error => ({error: error.message}))
}
