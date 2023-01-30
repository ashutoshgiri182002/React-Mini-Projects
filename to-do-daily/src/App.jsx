import React, { useState,useEffect } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {

  const data = JSON.parse(localStorage.getItem("TODO")) || [];
  //const [items, setItems] = useState(data);

  const [items, setItems] = useState(data);

  function addItem(inputText) {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
  }


  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }


  useEffect(() => {
    localStorage.setItem("TODO", JSON.stringify(items));
  }, [items]);
  
  
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do Daily</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
