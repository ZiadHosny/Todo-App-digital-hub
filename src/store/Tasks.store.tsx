import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { Task } from "../interfaces";

const defaultTasks: Task[] = [
  {
    title: "Finished Task",
    description: "Write your description",
    dir: "Main",
    completed: true,
    id: "Task0",
    status: 'Finished'
  },
  {
    title: "NotStarted Task",
    description: "Write your description",
    dir: "Main",
    completed: true,
    id: "Task1",
    status: 'NotStarted'
  },
  {
    title: "InProgress Task",
    description: "Write your description",
    dir: "Main",
    completed: true,
    id: "Task2",
    status: 'InProgress'
  },
  {
    title: "Finished Task 2",
    description: "Write your description",
    dir: "Main",
    completed: true,
    id: "Task3",
    status: 'Finished'
  },

];

const initialState: { tasks: Task[] } =
  { tasks: defaultTasks }
const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    addNewTask(state, action: PayloadAction<Task>) {
      state.tasks = [action.payload, ...state.tasks];
    },
    removeTask(state, action) {
      const newTasksList = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      state.tasks = newTasksList;
    },
    editTask(state, action: PayloadAction<Task>) {
      const taskId = action.payload.id;

      const newTaskEdited: Task = state.tasks.find(
        (task: Task) => task.id === taskId
      )!;
      const indexTask = state.tasks.indexOf(newTaskEdited);
      state.tasks[indexTask] = action.payload;
    },
    toggleTaskCompleted(state, action: PayloadAction<string>) {
      const taskId = action.payload;

      const currTask = state.tasks.find((task) => task.id === taskId)!;

      currTask.completed = !currTask.completed;
    },
  },
});

export const tasksActions = tasksSlice.actions;
export default tasksSlice.reducer;
