import React from "react";
import { useState } from "react";

function Task() {
  const [color, setColor] = useState(false);

  // toggle;
  function changeColor() {
    setColor(!color);
  }

  // function changeColor() {
  //   setColor(true);
  // }

  return (
    <div className="col text-center d-flex justify-content-center  ">
      <div className="border my-3 p-2">
        <h3 className="p-2 ">
          {color ? "Task is done!" : "Task is not done!"}
        </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.!</p>

        <button
          onClick={changeColor}
          className={color ? "btn btn-success" : "btn btn-danger"}
        >
          {color ? "Done" : "Mark as done"}
        </button>
      </div>
    </div>
  );
}

export default Task;
