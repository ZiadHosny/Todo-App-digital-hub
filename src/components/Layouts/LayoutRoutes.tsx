import React from "react";
import { Status, Task } from "../../interfaces";
import { useAppDispatch } from "../../store/hooks";
import { modalActions } from "../../store/Modal.store";
import TaskItem from "../TaskItem/TaskItem";

type Props = {
  title: string;
  tasks: Task[] | [];
  status?: Status
};

const LayoutRoutes: React.FC<Props> = ({ title, tasks, status }) => {
  const dispatch = useAppDispatch();

  const openModalHandler = () => {
    dispatch(modalActions.openModalCreateTask());
  };

  const tasksTitle = `${title} (${tasks.length} ${tasks.length === 1 ? "task" : "tasks"
    })`;

  return (
    <section>
      <h1 className="font-medium my-5 text-center sm:text-left sm:my-8 md:text-2xl text-lg dark:text-slate-200">
        {tasksTitle}
      </h1>
      <ul
        className={'tasksList mt-4 grid gap-2 sm:gap-4 xl:gap-6 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-2 items-end'}
      >
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
        <li>
          <button
            onClick={openModalHandler}
            className={`border-2 border-slate-300
             text-slate-400 w-full rounded-lg
              border-dashed transition hover:bg-slate-300
               hover:text-slate-500
               dark:border-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-300 ${"h-52 sm:h-64"
              }`}
          >
            Add new task
          </button>
        </li>
      </ul>
    </section>
  );
};

export default React.memo(LayoutRoutes);
