import React from "react";
import { useState } from "react";

function LessText({ text, maxLength: length, id }) {
  const [textLength, setLength] = useState(findLength);

  function findLength() {
    if (length === text.length) {
      return true;
    } else {
      return false;
    }
  }
  function changeBtn() {
    setLength(!textLength);
  }

  return (
    <div className="row d-flex justify-content-center ">
      <div className="col-6  border-bottom border-info ">
        <p className="m-2" key={id}>
          {textLength ? text : text.substring(0, length)}
          {text.length > 35 && (
            <button
              className="btn btn-outline-dark  btn-sm ms-2"
              onClick={changeBtn}
            >
              {textLength ? "Read less" : "Read more"}
            </button>
          )}
        </p>
      </div>
    </div>
  );
}

export default LessText;
