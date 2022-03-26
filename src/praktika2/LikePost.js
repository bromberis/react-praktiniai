import React from "react";
import { useState } from "react";

function Second() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  function countLike() {
    setLike(like + 1);
  }

  function countDislike() {
    setDislike(dislike + 1);
  }

  function reset() {
    setLike(0);
    setDislike(0);
  }

  return (
    <div className="col d-flex justify-content-center ">
      <div className="card " style={{ width: 18 + "rem" }}>
        <img
          src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2018/06/react-ideal-image.png?fit=1200%2C600&ssl=1"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button className="btn btn-success mx-1" onClick={countLike}>
            like {like}
          </button>
          <button className="btn btn-danger mx-1" onClick={countDislike}>
            dislike {dislike}
          </button>
          <button className="btn btn-info mx-1" onClick={reset}>
            reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Second;
