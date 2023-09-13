import React from "react";
import { Task } from "../../interfaces";

const InfosTask: React.FC<{ task: Task }> = ({
  task,
}) => {

  return (
    <div className={`flex flex-col flex-1`}>
      <div
        className={`flex items-center justify-between mb-2"`}
      >
        <span className="block font-medium dark:text-slate-200">
          {task.title}
        </span>
      </div>
      <p
        title={task.description}
        className={`description mb-2 text-slate-500 dark:text-slate-500 ${"line-clamp-3"
          }`}
      >
        {task.description}
      </p>
    </div>
  );
};

export default InfosTask;
