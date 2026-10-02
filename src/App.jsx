import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      description: "Feb 5th at 2:30pm",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Go to the Gym",
      description: "Feb 5th at 4:30pm",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Barbershop Appointment",
      description: "Feb 5th at 7:30pm",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });

    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl fonttext-slate-100 -bold text-center">
          Task Manager
        </h1>
        <AddTask />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} />
      </div>
    </div>
  );
}

export default App;
