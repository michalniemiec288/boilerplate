import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { reducer as modal } from 'redux-modal'
import User from './User'

const reducers = combineReducers({
  form,
  modal,
  User,
})

export default reducers
