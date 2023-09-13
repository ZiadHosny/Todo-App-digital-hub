import React, { useRef, useState } from "react";
import { Status, Task } from "../../interfaces";
import Modal from "./Modal";

const ModalCreateTask: React.FC<{
  onClose: () => void;
  task?: Task;
  nameForm: string;
  onConfirm: (task: Task) => void;
}> = ({ onClose, task, nameForm, onConfirm }) => {

  const status: Status[] = ['Not Started', 'In Progress', 'Finished']

  const [description, setDescription] = useState<string>(() => {
    if (task) {
      return task.description;
    }
    return "";
  });

  const [title, setTitle] = useState<string>(() => {
    if (task) {
      return task.title;
    }
    return "";
  });

  const isTitleValid = useRef<Boolean>(false);

  const [selectedStatus, setSelectedStatus] = useState<Status>(() => {
    if (task) {
      return task.status;
    }
    return status[0];
  });

  const addNewTaskHandler = (event: React.FormEvent): void => {
    event.preventDefault();

    isTitleValid.current = title.trim().length > 0;

    if (isTitleValid.current) {
      const newTask: Task = {
        title: title,
        description: description,
        dir: selectedStatus,
        completed: true,
        id: task?.id ? task.id : Date.now().toString(),
        status: selectedStatus
      };
      onConfirm(newTask);
      onClose();
    }
  };
  return (
    <Modal onClose={onClose} title={nameForm}>
      <form
        className="flex flex-col stylesInputsField"
        onSubmit={addNewTaskHandler}
      >
        <label>
          Title
          <input
            type="text"
            placeholder="e.g, study for the test"
            required
            value={title}
            onChange={({ target }) => setTitle(target.value)}
            className="w-full"
          />
        </label>
        <label>
          Description (optional)
          <textarea
            placeholder="e.g, study for the test"
            className="w-full"
            value={description}
            onChange={({ target }) => setDescription(target.value)}
          ></textarea>
        </label>
        <label>
          Select a Status
          <select
            className="block w-full"
            value={selectedStatus}
            onChange={({ target }) => setSelectedStatus(target.value as Status)}
          >
            {status.map((status: Status) => (
              <option
                key={status}
                value={status}
                className="bg-slate-100 dark:bg-slate-800"
              >
                {status}
              </option>
            ))}
          </select>
        </label>
        <button type="submit" className="btn mt-5">
          {nameForm}
        </button>
      </form>
    </Modal>
  );
};

export default ModalCreateTask;
