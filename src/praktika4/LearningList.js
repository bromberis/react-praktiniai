import React from "react";
import Learning from "./Learning";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function LearningList() {
  const learningList = [
    {
      id: 1,
      img: "https://cdn-icons-png.flaticon.com/512/732/732212.png?w=1060",
      language: "Aš mokausi HTML",
      status: false,
    },
    {
      id: 2,
      img: "https://cdn-icons-png.flaticon.com/512/919/919826.png?w=1060",
      language: "Aš mokausi CSS",
      status: false,
    },
    {
      id: 3,
      img: "https://cdn-icons-png.flaticon.com/512/460/460771.png?w=1060",
      language: "Aš mokausi JS",
      status: false,
    },
  ];

  const [postStatus, setPostStatus] = useState(learningList);

  function changeStatus(id) {
    const updateStatus = [...postStatus];
    updateStatus.forEach((data) => {
      if (data.id === id) {
        data.status = true;
      }
    });
    setPostStatus(updateStatus);
  }

  const learningListData = postStatus.map((data) => {
    return (
      <Learning
        key={uuidv4()}
        id={data.id}
        lang={data.language}
        img={data.img}
        status={data.status}
        changeStatus={changeStatus}
      />
    );
  });

  return <>{learningListData}</>;
}

export default LearningList;
