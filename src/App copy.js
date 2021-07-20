import { useState } from "react";
//El componente es reactiuvo porque se está llamando una y otra vez y está actualizando lo que tiene que actualizar
function App() { // Este es un componente funcional y no de clase
  const [nombre, setNombre] = useState("Juan Camilo Paniagua Alvarez");
  const [edad, setEdad] = useState();

  const handleMatrixClick = () => {
    setNombre("codepanijc");
  };

  return(
    <div className="App">
      <h2>Lo estás haciendo muy bien {nombre}</h2>
      <button onClick={handleMatrixClick}>
        MatriX
      </button>
    </div>
  );
}

export default App;
