import { combineReducers } from 'redux'
import { categoriesAPITypes, servicesAPITypes } from '../actions/apiActions'

export function createApiReducer(name, apiTypes) {
  return function(state = {
    isLoading: false,
    data: null,
    error: null
  }, action) {
    switch(action.type) {
      case apiTypes.LOAD:
        return {
          ...state,
          isLoading: true
        }
      case apiTypes.LOAD_SUCCESS:
        return {
          ...state,
          isLoading: false,
          data: action.payload
        }
      case apiTypes.LOAD_ERROR:
        return {
          ...state,
          isLoading: false,
          error: action.payload
        }
      default:
        return state
    }
  }
}

export const categoriesReducer = createApiReducer('categories', categoriesAPITypes)
export const servicesReducer = createApiReducer('services', servicesAPITypes)

export const apiReducer = combineReducers({
  categories: categoriesReducer,
  services: servicesReducer
})
