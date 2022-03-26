import React from "react";
import LessText from "./LessText";

function LessTextList() {
  let content = [
    {
      id: 1,
      text: "1. Lorem ipsum dolor.",
      maxLength: 35,
    },
    {
      id: 2,
      text: "2. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      maxLength: 35,
    },
    {
      id: 3,
      text: "3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia facilis perferendis maiores ducimus repellat cupiditate rem necessitatibus, nisi non quibusdam assumenda itaque, ea laborum doloribus nemo quisquam id praesentium? Sit?",
      maxLength: 35,
    },
  ];

  let data = content.map((data) => {
    return (
      <LessText
        key={data.id}
        text={data.text}
        maxLength={data.maxLength}
        id={data.id}
      />
    );
  });

  return <>{data}</>;
}

export default LessTextList;
