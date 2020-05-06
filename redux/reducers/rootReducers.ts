import { combineReducers } from 'redux'
import countryReducer from './countryReducer'

export default combineReducers({
  contry: countryReducer
})