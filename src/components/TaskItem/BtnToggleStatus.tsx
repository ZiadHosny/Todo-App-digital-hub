import React from "react";

import { Status } from "../../interfaces";

const BtnToggleCompleted: React.FC<{
  taskStatus: Status;
  taskId: string;
}> = ({ taskStatus, taskId }) => {
  return (
    <button
      className={`${taskStatus
        === 'Finished' ? "bg-emerald-700 text-emerald-100 "
        : taskStatus === 'Not Started' ? "bg-red-700 text-yellow-50 "
          : "bg-amber-200 text-amber-800 "
        } ${"mr-4 order-0"} rounded - full font - medium`}
    // onClick={(e) => handleClick(e)}
    >
      <span className="block py-1 px-3">
        {taskStatus}
      </span>
    </button>
  );
};

export default React.memo(BtnToggleCompleted);
