import React from "react";
import { useAppDispatch } from "../../store/hooks";
import { tasksActions } from "../../store/Tasks.store";
import { ReactComponent as SvgX } from "../../assets/x.svg";
import { ReactComponent as Check } from "../../assets/check.svg";
import { Status } from "../../interfaces";

const BtnToggleCompleted: React.FC<{
  taskStatus: Status;
  taskId: string;
}> = ({ taskStatus, taskId }) => {
  const dispatch = useAppDispatch();

  const toggleTaskCompleted = (id: string) => {
    dispatch(tasksActions.toggleTaskCompleted(id));
  };

  return (
    <button
      title={taskStatus ? "mark as uncompleted" : "mark as completed"}
      className={`${taskStatus
        === 'Finished' ? "bg-emerald-200 text-emerald-800 "
        : taskStatus === 'NotStarted' ? "bg-red-700 text-yellow-50 "
          : "bg-amber-200 text-amber-800 "
        } ${"mr-4 order-0"} rounded - full font - medium`}
      onClick={() => toggleTaskCompleted(taskId)}
    >
      <span className="block py-1 px-3 absolute invisible sm:static sm:visible">
        {taskStatus}
      </span>
      <span className=" sm:hidden w-6 h-6 grid place-items-center">
        {taskStatus ? (
          <Check className="w-3 h-3" />
        ) : (
          <SvgX className="w-3 h-3" />
        )}
      </span>
    </button>
  );
};

export default React.memo(BtnToggleCompleted);
