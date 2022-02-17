import { todosTypes } from "../types";

const todoReducer=(state={},action)=>{
const {type,payload}=action;
// זה הדיסטרקטיו במקום לרשום אקשן נקודה טייפ
switch (type) {
    case todosTypes.addTodo:
        return [...state,payload];
        break;

    default:
        return state;
        break;
}
}
export default todoReducer;