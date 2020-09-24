import React, { useState } from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import "./ToDoList.css";
import FlipMove from "react-flip-move";
function ToDoList(props) {
  return (
    <>
      <div className="todolist">
        <CancelIcon
          className="icon"
          onClick={() => {
            props.onSelect(props.id);
          }}
        />
        <li>{props.text}</li>
      </div>
    </>
  );
}

export default ToDoList;
