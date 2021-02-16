import {combineReducers,createStore, applyMiddleware} from 'redux'
import thunkMiddleware  from "redux-thunk"
import UsersReducer from './reducer/UsersReducer'

let reducer = combineReducers({
        users:UsersReducer
})

let store = createStore(reducer,applyMiddleware(thunkMiddleware));

export default store