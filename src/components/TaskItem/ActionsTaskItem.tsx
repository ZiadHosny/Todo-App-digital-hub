import React from "react";
import { Task } from "../../interfaces";
import BtnEditTask from "./BtnEditTask";
import BtnDeleteTask from "./BtnDeleteTask";
import BtnToggleStatus from "./BtnToggleStatus";

const ActionsTaskItem: React.FC<{ task: Task }> = ({
  task,
}) => {
  return (
    <>
      <div
        className={`flex border-dashed border-slate-200 dark:border-slate-700/[.3] ${"border-t-2 w-full pt-4 mt-4"
          }`}
      >
        <BtnToggleStatus
          taskStatus={task.status}
          taskId={task.id}
        />

        <BtnDeleteTask taskId={task.id} />
        <BtnEditTask task={task} />
      </div>
    </>
  );
};

export default ActionsTaskItem;
