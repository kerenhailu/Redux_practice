import { combineReducers } from "redux";
import todoReducer from "./todos";
import userReducer from "./user";

const globalReducer=combineReducers({
    todos:todoReducer,
    user:userReducer,
})
export default globalReducer;