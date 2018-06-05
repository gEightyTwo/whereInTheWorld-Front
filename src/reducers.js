import { combineReducers } from 'redux'
import { SET_CITY_INFO, SET_CITY_IMG, SET_CITY_SCORES } from './actions'


const cityInfo = (state = [], action) => {
  switch(action.type){
    case SET_CITY_INFO:
      return action.payload
    default:
      return state
  }
}
const cityImages= (state = [], action) => {
  switch(action.type){
    case SET_CITY_IMG:
      return action.payload
    default:
      return state
  }
}
const cityScores = (state = [], action) => {
  switch(action.type){
    case SET_CITY_SCORES:
      return action.payload
    default:
      return state
  }
}






export default combineReducers({ cityInfo, cityImages, cityScores })
