import React from "react";
import Menu from "./components/Menu/Menu";
import Router from "./router";
import ModalCreateTask from "./components/Modal/ModalTask";
import { Task } from "./interfaces";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { modalActions } from "./store/Modal.store";
import { tasksActions } from "./store/Tasks.store";

const App: React.FC = () => {
  const modal = useAppSelector((state) => state.modal);

  const dispatch = useAppDispatch();

  const closeModalCreateTask = () => {
    dispatch(modalActions.closeModalCreateTask());
  };

  const createNewTaskHandler = (task: Task) => {
    dispatch(tasksActions.addNewTask(task));
  };


  return (
    <div>

      <div className="bg-slate-200 min-h-screen text-slate-600 dark:bg-slate-900 dark:text-slate-400 xl:text-base sm:text-sm text-xs">

        {modal.modalCreateTaskOpen && (
          <ModalCreateTask
            onClose={closeModalCreateTask}
            nameForm="Add a task"
            onConfirm={createNewTaskHandler}
          />
        )}
        <Menu />
        <Router />
      </div>
    </div>
  );
};

export default App;