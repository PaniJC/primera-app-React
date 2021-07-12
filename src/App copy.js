import { useState} from "react";
//El componente es reactiuvo porque se está llamando una y otra vez y está actualizando lo que tiene que actualizar
function App() { // Este es un componente funcional y no de clase
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = ({ target : { value }}) => { //Otra forma de hacerlo
    setPassword(value);
  };

  const handleFormSubmit = (event) => { //Otra forma de hacerlo
    event.preventDefault();
    alert(`Usuario: ${email}, Password: ${password}`);
  };

  console.log(email);
  console.log(password);

  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <h2>Inciar sesión</h2>
        <label>
          Correo
          <input type="email" value={email} onChange = {handleEmailChange}/>
        </label>
        <label>
          Contraseña
          <input type="password" value={password} onChange = {handlePasswordChange}/>
        </label>
        <button type="submit">
          Enter
        </button>
      </form>
    </div>
  );
}

export default App;
