import * as React from "react";
import { ListaTareas } from "./ListaTareas";
type Props = {};

export const TodoApp = (props: Props) => {
  const [nuevaTarea, setNuevaTarea] = React.useState<string>("");
  const [listaTareas, setListaTareas] = React.useState<string[]>([]);

  const handleAddTask = () => {
    if (nuevaTarea.trim() !== "") {
      setListaTareas([...listaTareas, nuevaTarea]);
      setNuevaTarea("");
    }
  };

  const handleBorrarTarea = (index: number) => {
    setListaTareas((tarea) => tarea.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Lista de tareas</h1>
      <div>
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Nueva Tarea"
        />
        <button onClick={handleAddTask}>Agregar Tarea</button>
      </div>
      <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea} />
    </div>
  );
};
