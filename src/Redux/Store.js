import { createStore } from "redux";
import globalReducer from "./Reducers";
const store=createStore(globalReducer,{
    todos:[
        {title:"keren",isComplet:true},
        {title:"action",isComplet:false}
    ]
});
export default store;