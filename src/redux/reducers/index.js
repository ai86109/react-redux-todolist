import todosReducer from "./todos";

import { combineReducers } from 'redux'
import todos from './todos'
import filter from './filters'

export default combineReducers({
  todoState: todos,
  filterState: filter,
})