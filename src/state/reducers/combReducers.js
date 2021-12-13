import {combineReducers} from "redux";
import usernameReducer from "./usernameReducer"
import childIDReducer from "./childIDReducer"

const reducers = combineReducers({
    username: usernameReducer,
    childID: childIDReducer
})

export default reducers;