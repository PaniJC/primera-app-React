import { useState, useEffect } from "react";

//El componente es reactiuvo porque se está llamando una y otra vez y está actualizando lo que tiene que actualizar
const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  /* ComponentDidUpdate Actualizar algo cada que cambie el estado*/
  useEffect(() => {
    console.log("didUpdate Effect");
  });

  useEffect(() => {
    console.log("name o age cambiaron");
  }, [name, age]);

  /* ComponentDidMount Unicamente en una primera montada se llama - podemos llamar API o cualquier trabajo que requiera cuando el componente se monte*/
  useEffect(() => {
    console.log("didMount Effect");

    return () => {
      console.log("willUnmount") //cá coloco lo que necesito remover
    }
  }, []);

    return(
    <div>
      <input value={name} onChange = {({target: { value }}) => setName(value)} />
      <br />
      <input value={age} onChange = {({target: { value }}) => setAge(value)} />
    </div>);
}

export default App;
