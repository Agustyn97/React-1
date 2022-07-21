import React, { useState }  from 'react'

const Botonera = ({dispatch}) => {
  const [tarea,setTarea] = useState("");

  const addTarea = (tarea) => dispatch( { type: "ADD", payload: tarea })
  
  return (
    <div className="botonera">
        <input className="inputext" type="text" onBlur={(e)=> setTarea(e.target.value)}/>
        <button className="boton1" onClick={() => addTarea(tarea) }>AGREGAR TAREA</button>
        <button className="boton2" onClick={() => dispatch( { type: "DELETE"}) }>BORRAR TAREA</button>
    </div>
  )
}

export default Botonera; 