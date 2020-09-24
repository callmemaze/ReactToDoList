import React, { useState } from "react";
import "./App.css";
import ToDoList from "./ToDoList";
import EventNoteIcon from "@material-ui/icons/EventNote";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInput(event.target.value);
  };

  const itemList = () => {
    setItems((oldItems) => {
      return [...oldItems, input];
    });
    setInput("");
  };

  const removeItem = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="App">
      <div className="MainCard">
        <div className="header">
          <EventNoteIcon className="icon" />
          <h1>ToDoList</h1>
        </div>
        <div className="Input">
          <input
            type="text"
            placeholder="Add an Items"
            value={input}
            onChange={itemEvent}
          ></input>
          <button className="btn" onClick={itemList}>
            +
          </button>
        </div>
        <ol>
          {items.map((itemValue, index) => {
            return (
              <ToDoList
                key={index}
                id={index}
                text={itemValue}
                onSelect={removeItem}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
