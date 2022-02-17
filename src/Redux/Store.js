import { createStore } from "redux";
import globalReducer from "./Reducers";
const store=createStore(globalReducer,{});
export default store;