import { createStore ,compose,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import globalReducer from "./Reducers";

const Middleware=[thunk];
const store=createStore(globalReducer,{
    todos:[
        {title:"keren",isComplet:true},
        {title:"action",isComplet:false}
    ],
},
compose(applyMiddleware(...Middleware))
// אותו הדבר , אבל אם נרצה להשתמש ביותר טאנק נעשה לו משתנה בתוך מערך
// compose(applyMiddleware(thunk))
);
export default store;