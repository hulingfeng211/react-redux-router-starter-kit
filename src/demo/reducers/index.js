import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import mail from './mail'

//整体业务模型
const rootReducer = combineReducers({
  "mail": mail,
  "routing": routerReducer
})

export default rootReducer
