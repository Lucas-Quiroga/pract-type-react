import React from "react";

type TareaProps = {
  tarea: string;
  borrarTarea: () => void;
};

const Tarea = ({ tarea, borrarTarea }: TareaProps) => {
  return (
    <div className="task">
      <span>{tarea}</span>
      <button onClick={borrarTarea}>Borrar Tarea</button>
    </div>
  );
};

export default Tarea;
