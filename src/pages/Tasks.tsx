import React from "react";
import { useAppSelector } from "../store/hooks";
import useFilterStatusTasks from "../hooks/useFilterStatusTasks";
import LayoutRoutes from "../components/Layouts/LayoutRoutes";
import { Status } from "../interfaces";

const Tasks: React.FC<{ title: string, status: Status }> = ({
  title,
  status
}) => {
  const tasks = useAppSelector((state) => state.tasks.tasks);

  const { tasks: tasksFiltered } = useFilterStatusTasks({ tasks, status });

  return <LayoutRoutes title={title} tasks={tasksFiltered} status={status}></LayoutRoutes>;
};

export default Tasks;
