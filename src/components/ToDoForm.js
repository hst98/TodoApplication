import React, { useState, useEffect, useRef } from "react";

function ToDoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });
  const handleChnage = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });
    setInput("");
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update your todo"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChnage}
            ref={inputRef}
          />
          <button className="todo-button edit">Update</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add a to-do"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChnage}
            ref={inputRef}
          />
          <button className="todo-button">Add to-do</button>
        </>
      )}
    </form>
  );
}

export default ToDoForm;
