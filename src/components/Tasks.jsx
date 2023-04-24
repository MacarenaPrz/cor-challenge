import Task from "./Task";

const Tasks = ({ tasks, deleteTask, updateTask }) => {
    return (
        <div className="mt-5">
            <h2 className="text-center mb-5">Tareas</h2>
            <ul className="list-group">
                {tasks.map((task) => (
                        <Task key={task.id} task={task} deleteTask={deleteTask} updateTask={updateTask}/>
                    ))}
                    
                    {/* Mensaje para mostrar si no hay tareas */}
                    {
                        tasks.length === 0 && (
                            <li className="list-group-item text-center"> No hay tareas</li>
                        )
                    }
            </ul>
        </div>
    )
}

export default Tasks;