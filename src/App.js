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

  const [showAddTask, setShowAddTask] = useState(false);

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

  //TOGGLE DONE
  const toggleDone = (toggleDoneId) => {
    setTasks(tasks.map((task) => task.id === toggleDoneId ? {...task, isDone: !task.isDone} : task))
  }

  //TOGGLE SHOW

  const toggleShow = () => {
    setShowAddTask(!showAddTask);
  }


  return (
    <div className="container">
      <Header title="TASK TRACKER" showAddTask={showAddTask} toggleShow={toggleShow}/>
      {showAddTask && <AddTask addTask={addTask}/>}
      {
        tasks.length > 0 ? <Tasks tasks={tasks} deleteTask={deleteTask} toggleDone = {toggleDone}/> : <h2 style={{textAlign:"center", fontSize:"16px"}}>NO TASK TO SHOW</h2>
      }
    </div>
  );
}

export default App;
