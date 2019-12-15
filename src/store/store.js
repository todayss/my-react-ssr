import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import indexReducer from './index'
import userReducer from './user'

const reducer = combineReducers({
  index: indexReducer,
  user: userReducer
})

//const store = createStore(reducer, applyMiddleware(thunk))

// export default store 

export const getClientStore = () => {
  const defaultStore = window._context ? window._context : {}
  return createStore(reducer, defaultStore, applyMiddleware(thunk))
}

export const getServerStore = () => {
  return createStore(reducer, applyMiddleware(thunk))
}