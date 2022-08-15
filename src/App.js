import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id:1,
      text: "Study React Notes",
      day: "August 16th at 3:30 pm",
      isDone: false,
    },
    {
      id:2,
      text: "Cook",
      day: "August 16th at 2:00 pm",
      isDone: true,
    },
    {
      id:3,
      text: "Feed the Cat",
      day: "August 15th at 5:00 pm",
      isDone: false,
    }
  ]);

  //DELETE TASK
  const deleteTask = (deletedTaskId) => {
    setTasks(tasks.filter((task) => task.id !== deletedTaskId));

  }

  //ADD TASK
  const addTask = (newTask) => {
    const  id=Math.floor(Math.random()*100000 +1);
    const addNewTask = {id, ...newTask};
    setTasks([...tasks, addNewTask]);
  }


  return (
    <div className="App">
      <Header title="TASK TRACKER"/>
      <AddTask addTask={addTask}/>
      <Tasks tasks={tasks} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
