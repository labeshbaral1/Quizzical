import {createStore} from 'redux'
import {isSelectedReducer} from "./reducers/isSelected"


export const store = createStore(isSelectedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
