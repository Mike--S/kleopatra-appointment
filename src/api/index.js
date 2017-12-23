import queryString from 'query-string'

const API_ROOT = 'http://localhost:3000'

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