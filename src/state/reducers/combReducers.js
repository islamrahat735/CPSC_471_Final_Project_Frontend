import {combineReducers} from "redux";
import usernameReducer from "./usernameReducer"

const reducers = combineReducers({
    username: usernameReducer
})

export default reducers;