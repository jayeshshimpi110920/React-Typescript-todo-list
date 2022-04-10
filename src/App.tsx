import React, { FC, ChangeEvent, useState } from "react";

import { ITask } from "./Interfaces";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task };
    setTodoList([...todoList, newTask]);
    setTask("");
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };

  return (
    <div className="App">
      <div className="header">
        <input
          type="text"
          placeholder="Enter TODO Task Here"
          name="task"
          value={task}
          onChange={handleChange}
        />
        <button onClick={addTask}>Add</button>
      </div>

      {/* todo list */}

      <div className="todoList">
        <ol>
          {todoList.map((task: ITask, key: number) => {
            return (
              <>
                <li>
                  <span>{task.taskName}</span>{" "}
                  <button
                    onClick={() => {
                      completeTask(task.taskName);
                    }}
                  >
                    Delete
                  </button>
                </li>
              </>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default App;
