import Botonera from "./Components/Botonera";
import React,{ useReducer } from 'react'
import "./Styles/Styles.css"

const initialState = () => ({
  toDo: []
})

const reducer = (state = initialState(), action = {}) => {
  if(action.type === "ADD"){
    return { toDo:  state.toDo.concat([action.payload])}
  }
  else if(action.type === "DELETE"){
    return { toDo: []}
  }
  return state;
}


function App() {
  const [state, dispatch] = useReducer(reducer, reducer());

  const listaDeTareas = () => state.toDo && state.toDo.map((tarea) => <h2>{tarea}</h2>)

  return (
    <div className="App">
      <h1 className="titulo">ToDo List</h1>
      <Botonera dispatch={dispatch} />
      {listaDeTareas()}
    </div>
  );
}

export default App;
