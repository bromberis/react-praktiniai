import React from "react";
import data from "./todoList.json";
import TodoListCard from "./TodoListCard";
import { useState } from "react";

function TodoList() {
  const [status, setStatus] = useState(data);

  function changeStatus(id) {
    const updateStatus = [...status];
    updateStatus.forEach((data) => {
      if (data.id === id) {
        data.status = true;
      }
    });
    setStatus(updateStatus);
  }

  const taskData = status.map((data) => {
    return (
      <TodoListCard
        key={data.id}
        id={data.id}
        task={data.task}
        status={data.status}
        changeStatus={changeStatus}
      />
    );
  });

  return <>{taskData}</>;
}

export default TodoList;
