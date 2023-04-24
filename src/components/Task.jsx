const Task = ({ task, deleteTask, updateTask }) =>{

    const {id, title, description, state, priority} = task;
    return (
        <li className="list-group-item">
            <div className="d-flex justify-content-between align-items-start">
                <div>
                    <h5 className={`${state && "text-success"}`}>{title}</h5>
                    <p>{description}</p>
                    <div className="d-flex gap-2">
                        <button onClick={() => deleteTask(id)} className="btn btn-sm btn-danger">Eliminar</button>
                        <button onClick={()=> updateTask(id)} className="btn btn-sm btn-secondary">Actualizar</button>
                    </div>
                </div>
                <span className="badge bg-primary">{priority && 'Alta'}</span>
            </div>
        </li>
    )
}

export default Task;