import { useState } from "react";
import Swal from "sweetalert2";

const Formulario = ({ addTask }) => {

    const [task, setTask] = useState({
        title: '',
        description: '',
        state: 'en-proceso',
        priority: true
    })

    const {title, description, state, priority} = task

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!title.trim()|| !description.trim()){
           return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Completá los campos',
              })
        }

        addTask({
            id: Date.now(),
            ...task, state: state === 'completado' ? true : false
        })

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Tarea agregada',
            showConfirmButton: false,
            timer: 1500
          })
    };

    const handleChange = e => {
        
        setTask({
            ...task, [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
        })
    };

    return (
        <form onSubmit={handleSubmit}>
            
            <input type="text" placeholder="Título" className="form-control mb-2" name="title" value={title} onChange={handleChange}/>

            <textarea className="form-control mb-2" placeholder="Descripción" name="description" value= {description} onChange={handleChange}/>
            
            <div className="form-check mb-2">
                <label htmlFor="inputCheck">Dar prioridad</label>
                <input type="checkbox" name="priority" className="form-check-input" id="inputCheck" checked={priority} onChange={handleChange}/>
            </div>
            
            <select className="form-select mb-2" name="state" value={state} onChange={handleChange}>
                <option value="nueva">Nueva</option>
                <option value="en-proceso">En Proceso</option>
                <option value="finalizada">Finalizada</option>
            </select>

            <button className="btn btn-primary" type="submit">Crear tarea</button>

        </form>
    );
};

export default Formulario;