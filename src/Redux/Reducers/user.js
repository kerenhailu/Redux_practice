import { userTypes } from "../types";

const userReducer=(state={},action)=>{
    const {type,payload}=action;
switch (type) {
    case userTypes.logIn:
        return [...state,payload];
        break;

    default:
        return state;
        break;
}
}
export default userReducer;