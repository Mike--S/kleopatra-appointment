import * as actionTypes from '../actions/actionTypes'

const initialState = {
  currentCategoryId: 'manicure',
  services: [],
  master: null,
  time: null,
  date: null,
  user: null
}
export function appointmentReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_SERVICE:
      return {
        ...state,
        services: [
          ...state.services,
          {
            id: action.service.id,
            name: action.service.name.toLowerCase(),
            price: action.service.price,
            time: action.service.time
          }
        ]
      }
    case actionTypes.REMOVE_SERVICE:
      return {
        ...state,
        services: state.services.filter(service => service.name !== action.name)
      }
    case actionTypes.CHOOSE_CATEGORY:
      return {
        ...state,
        currentCategoryId: action.id
      }
    case actionTypes.CLEAR_SERVICES:
      return {
        ...state,
        services: []
      }
    case actionTypes.ADD_MASTER:
      return {
        ...state,
        master: action.master
      }
    case actionTypes.ADD_TIME:
      return {
        ...state,
        time: action.time
      }
    case actionTypes.ADD_DATE:
      return {
        ...state,
        date: action.date
      }
    case actionTypes.ADD_DATE:
      return {
        ...state,
        user: {
          phone: action.data.phone,
          name: action.data.name,
          comment: action.data.comment
        }
      }
    default:
      return state
  }
}