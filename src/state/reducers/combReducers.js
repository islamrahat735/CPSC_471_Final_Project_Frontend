import {combineReducers} from "redux";
import usernameReducer from "./usernameReducer"
import childIDReducer from "./childIDReducer"
import teacherIDReducer from "./teacherIDReducer"

const reducers = combineReducers({
    username: usernameReducer,
    childID: childIDReducer,
    teacherID: teacherIDReducer
})

export default reducers;