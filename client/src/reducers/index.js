import { combineReducers } from 'redux'
import goalReducer from './goalReducer'
import taskReducer from './taskReducer'

const rootReducer = combineReducers({
  goals: goalReducer,
  tasks: taskReducer
})

export default rootReducer
