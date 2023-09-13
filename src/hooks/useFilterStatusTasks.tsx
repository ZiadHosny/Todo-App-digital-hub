import { useEffect, useState } from "react";
import { Status, Task } from "../interfaces";

interface Props {
  tasks: Task[];
  status: Status
}

const useFilterStatusTasks = (props: Props): { tasks: Task[] } => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {

    const filteredTasks: Task[] = props.tasks.filter((task: Task) => {
      return props.status === task.status
    });
    setTasks(filteredTasks);
  }, [props.tasks, props.status]);

  return { tasks };
};

export default useFilterStatusTasks;
