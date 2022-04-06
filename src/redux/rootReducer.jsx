import {combineReducers,createStore} from 'redux';
import BookingTickietReducer from './Reducer/BookingReducer'

const rootReducer = combineReducers({
    BookingTickietReducer,
})
export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())