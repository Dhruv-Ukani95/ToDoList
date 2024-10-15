import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import List from "./components/List/List";

import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [todolist, setTodoList] = useState([]);

  const addItemHandler = () => {
    const newTodoItem = {
      id: uuidv4(),
      item: text,
      done: false,
    };
    setTodoList([...todolist, newTodoItem]);
    setText("");
  };

  const toggleHandler = (itemId) => {
    const newTodoList = todolist.map((listItem) => {
      if (listItem.id === itemId) {
        return { ...listItem, done: !listItem.done };
      }
      return listItem;
    });

    setTodoList(newTodoList);
  };
  const deletehandler = (itemId) => {
    const newTodoList = todolist.filter((listItem) => listItem.id !== itemId);
    setTodoList(newTodoList);
  };

  return (
    <div className="App">
      <h1>To Do List</h1>
      <div className="adder">
        <input
          type="text"
          placeholder="Add Items to your List"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <span onClick={addItemHandler}>+</span>
      </div>
     { todolist.length >0 ? ( <List
        todolist={todolist}
        toggle={toggleHandler}
        onDelete={deletehandler}
      />): <h1> No Items here!! </h1>
     }
    </div>
  );
}

export default App;
