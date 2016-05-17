import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import mails from './mails'

const rootReducer = combineReducers({
  mails,
  "routing": routerReducer
})

export default rootReducer
