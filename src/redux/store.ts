import {applyMiddleware, combineReducers, createStore} from "redux"
import historyReducer from "./historyReducer";
import {cocktailDataReducer} from "./cocktailDataReducer";
import {logger} from "redux-logger";
import thunk from "redux-thunk";

const store = createStore(combineReducers({
        history: historyReducer,
        cocktailData:cocktailDataReducer} ),
    applyMiddleware(thunk, logger));

export default store;