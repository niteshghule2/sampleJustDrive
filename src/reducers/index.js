import counterReducer from './counterReducer';
import loggedReducer from './isLogged';
import { combineReducers } from 'redux';
const allReducer = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
})
export default allReducer;