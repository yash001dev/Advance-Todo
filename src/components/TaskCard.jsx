import React from "react";

function TaskCard({ data }) {
  return (
    <div key={data.id} className="task-card px-3 py-4 mt-3">
      <p className="header">{data.taskName}</p>
      <p className="description">
        {data.taskDescription ? data.taskDescription : "No Description"}
      </p>
    </div>
  );
}

export default TaskCard;
