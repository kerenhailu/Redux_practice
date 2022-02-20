import { todosTypes } from "../types"

export const addNewTodo=(text)=>
(dispatch)=>{
    const todo={title:text,isCompled:true};
    dispatch({type:todosTypes.addTodo,payload:todo})
}
