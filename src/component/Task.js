import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const Task = ({ task, deleteTask, toggleReminder }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => toggleReminder(task.id)}
    >
      <h3>
        {task.text}
        <FaRegTrashAlt
          onClick={() => deleteTask(task.id)}
          style={{ color: "black", cursor: "pointer" }}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
