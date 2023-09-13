import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Tasks from "./pages/Tasks";
import AllTasks from "./pages/AllTasks";
import HeaderTasks from "./components/Header/HeaderTasks";

const MainClass = 'pt-5 pb-8 sm:pb-16 px-3 md:px-8 md:w-full xl:w-8/12 m-auto min-h-screen'

const TasksSection: React.FC = () => {
    return (
        <main className={MainClass}>
            <HeaderTasks />
            <Routes>
                <Route path="/" element={<AllTasks />} />
                <Route
                    path="/NotStarted"
                    element={<Tasks title="Not Started tasks" status="Not Started" />}
                />
                <Route
                    path="/InProgress"
                    element={<Tasks title="In Progress tasks" status="In Progress" />}
                />
                <Route
                    path="/Finished"
                    element={<Tasks title="Finished tasks" status="Finished" />}
                />
                <Route path="*" element={<Navigate to="" />} />
            </Routes>
        </main>
    );
};

export default TasksSection;
