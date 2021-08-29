import { useState } from "react";
import "./App.css";
import AddTask from "./component/AddTask";
import Header from "./component/Header";
import Tasks from "./component/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors appointement",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at school",
      day: "Feb 10th at 2:30pm",
      reminder: false,
    },
    {
      id: 3,
      text: "Meeting with Ansh",
      day: "Feb 28th at 2:30pm",
      reminder: true,
    },
    {
      id: 4,
      text: "Go to Dmart",
      day: "Aug 23rd at 2:30pm",
      reminder: false,
    },
    {
      id: 5,
      text: "Talk to Mom",
      day: "Feb 20th at 2:30pm",
      reminder: true,
    },
  ]);

  const [showAddTaskSection, setShowAddTaskSection] = useState(false);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    console.log(newTask);
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        title="Task Tracker"
        showAdd={showAddTaskSection}
        onAdd={() => setShowAddTaskSection(!showAddTaskSection)}
      />
      {showAddTaskSection && <AddTask addTask={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          deleteTask={deleteTask}
          toggleReminder={toggleReminder}
        />
      ) : (
        "No tasks to show"
      )}
    </div>
  );
}

export default App;
