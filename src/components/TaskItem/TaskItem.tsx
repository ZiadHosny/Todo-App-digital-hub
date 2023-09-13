import React from "react";
import { Task } from "../../interfaces";
import { Link } from "react-router-dom";
import InfosTask from "./InfosTask";
import ActionsTaskItem from "./ActionsTaskItem";

const TaskItem: React.FC<{ task: Task }> = ({
  task,
}) => {
  return (
    <>
      <li key={task.id}>
        <Link
          to={`/`}
          title={task.dir}
          className="ml-auto mr-4 w-min whitespace-nowrap overflow-hidden max-w-[10rem] text-center text-ellipsis bg-rose-200 text-rose-600 px-4 py-1 rounded-t-md transition dark:bg-slate-700 dark:text-slate-200 block hover:bg-rose-300 dark:hover:bg-rose-500"
        >
          {task.dir}
        </Link>
        <article
          className={`bg-slate-100 rounded-lg p-3 sm:p-4 flex text-left transition hover:shadow-lg hover:shadow-slate-300 dark:bg-slate-800 dark:hover:shadow-transparent flex-col h-52 sm:h-64
          ${true ? 'not-started' : ''}  
          `}
        >
          <InfosTask task={task} />
          <ActionsTaskItem task={task} />
        </article>
      </li>
    </>
  );
};

export default React.memo(TaskItem);
