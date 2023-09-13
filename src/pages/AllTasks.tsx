import LayoutRoutes from "../components/Layouts/LayoutRoutes";
import { useAppSelector } from "../store/hooks";

const AllTasks: React.FC = () => {
  const tasks = useAppSelector((state) => state.tasks.tasks);

  return <LayoutRoutes title="All tasks" tasks={tasks}></LayoutRoutes>;
};

export default AllTasks;
