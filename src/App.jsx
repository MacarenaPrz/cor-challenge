import { useEffect, useState } from "react";
import Formulario from "./components/Formulario"
import Tasks from "./components/Tasks";


const initialStateTasks = JSON.parse(localStorage.getItem('tasks')) || []

const App = () => {

  const [tasks, setTasks] = useState(initialStateTasks)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  //addTasks
  const addTask = task => {
    setTasks([...tasks, task])
  }

  //eliminar task
  const deleteTask = id => {

    const newArray = tasks.filter(task => task.id !== id)

    setTasks(newArray)
  }

  //Editar task

  const updateTask = id => {

    const newArray = tasks.map(task => {
      if(task.id == id){
        task.state = !task.state
      }
      return task

    })

    setTasks(newArray)
  }

  //ordenar tasks

  const sortTask = arrayTasks => {
    return arrayTasks.sort((a,b) => {
      if (a.priority === b.priority) return 0
      if(a.priority === true) return -1
      if(a.priority === false) return 1
    })
  }

  return (
    <div className="container mb-2">
      <h1 className="my-5">TO DO LIST</h1>
      <Formulario addTask={addTask}/>
      <Tasks tasks={sortTask(tasks)} deleteTask={deleteTask} updateTask = {updateTask}/>
    </div>
  );
};

export default App;
