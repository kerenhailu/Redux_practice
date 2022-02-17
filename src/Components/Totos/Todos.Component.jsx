import React, { useState } from "react";
import { connect } from "react-redux";
import { addNewTodo } from "../../Redux/Actions/todos";

const Todos = (props) => {
  const [text, setText] = useState("");
  return (
    <div>
      <h1>Todos : {props.todos.length}</h1>
      <div>
        {props.todos.map((item, i) => 
          <p key={i}>{item.title}</p>
        )}
      </div>
      <br />
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={() => props.addNewTodo(text)}>click add</button>
      <h3>{text}</h3>
    </div>
  );
};
export default connect((state) => ({ todos: state.todos }), { addNewTodo })(
  Todos
);
