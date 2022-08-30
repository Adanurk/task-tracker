import "./App.css";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);

  const baseUrl = "http://localhost:5000/tasks";
  //!CRUD => create read update delete

//fetch tasks

  // useEffect(() => {
  //   const fetchTasks = async() => {
  //     const res = await fetch(baseUrl);
  //     const data = await res.json();
  //     console.log(data);
  //   };
  //   fetchTasks();
  // }, [])

  // fetch tasks with axios

  const fetchTasks = async() => {
    const {data} = await axios.get(baseUrl);
    setTasks(data);
  }

  useEffect(() => {
    fetchTasks()
  }, []);

  //ADD TASK
  //   const addTask = (newTask) => {
  //   const  id=Math.floor(Math.random()*100000 +1);
  //   const addNewTask = {id, ...newTask};
  //   setTasks([...tasks, addNewTask]);
  // }

  //Add task fetch

  // const addTask = async(newTask) => {
  //   const res = await fetch(baseUrl, {
  //     method:"POST",
  //     headers: {
  //       "Content-Type" : "application/json"
  //     },
  //     body: JSON.stringify(newTask)
  //   })
  //   await res.json()
  //   fetchTasks();
  // }

  //add task axios
  //! axios ile yapinca convert islemlerini vs o otomatik yapiyor

  const addTask = async(newTask) => {
    const response = await axios.post(baseUrl, newTask);
    fetchTasks();
  }
  
  


  //DELETE TASK
  // const deleteTask = (deletedTaskId) => {
  //   setTasks(tasks.filter((task) => task.id !== deletedTaskId));

  // }

  //axios

  const deleteTask = async(deletedTaskId) => {
    await axios.delete(`${baseUrl}/${deletedTaskId}`);
    fetchTasks();
  };



  //TOGGLE DONE
  // const toggleDone = (toggleDoneId) => {
  //   setTasks(tasks.map((task) => task.id === toggleDoneId ? {...task, isDone: !task.isDone} : task))
  // }

  // with backend

  const toggleDone = async(toggleDoneId) => {
    const {data} = await axios.get(`${baseUrl}/${toggleDoneId}`);
    const updatedTask = {...data, isDone:!data.isDone};
    await axios.put(`${baseUrl}/${toggleDoneId}`, updatedTask);
// await axios.patch(`${baseUrl}/${toggleDoneId}`, {isDone:!data.isDone})
    fetchTasks()
  }

  //! patch sadece belli bir kismi degistirir, ilgili datayi; put bütün bilgileri ceker.

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
