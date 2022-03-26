import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BiRightArrowAlt } from "react-icons/bi";

function TodoListCard({ id, task, status, changeStatus }) {
  return (
    <div className="row d-flex  justify-content-center">
      <div className="col-5 d-flex py-1 text-center">
        <p
          className={
            status ? "bg-success p-2 m-0 rounded" : "bg-warning p-2 m-0 rounded"
          }
        >
          {status ? <AiOutlineCheckCircle /> : <BiRightArrowAlt />}
          {task}
        </p>

        <button
          onClick={() => changeStatus(id)}
          className="btn btn-outline-success btn-sm mx-2"
        >
          {status ? "Done" : "Check"}
        </button>
        <button className="btn btn-outline-danger btn-sm">Delete</button>
      </div>
    </div>
  );
}

export default TodoListCard;
