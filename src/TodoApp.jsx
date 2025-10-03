import React, { useState } from "react";
import { TodoList } from "./TodoList";

export const TodoApp = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const deleteHandler =(indexvalue)=>{
    const newTodos = todos.filter((todos,index)=> index!==indexvalue)
    setTodos(newTodos)
  }

  const func1 = (e) => {
    setTask(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (task.trim() === "") return; // prevent empty tasks
    const List = [...todos, task];
    setTodos(List);
    setTask("");
    console.log(List);
  };

  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Todo List Items</h5>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              name="task"
              value={task}
              onChange={func1}
            />
            <input
              type="submit"
              value="Add"
              name="Add"
            />
          </form>

          
          <TodoList prop1={todos} deleteHandler = {deleteHandler}/>
        </div>
      </div>
    </div>
  );
};
