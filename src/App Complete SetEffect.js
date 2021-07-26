import { useState, useEffect } from "react";

//El componente es reactiuvo porque se está llamando una y otra vez y está actualizando lo que tiene que actualizar
const App = () => {

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [isLoged, setIsLoged] = useState(false);

  const handleLoginClick = () => {setIsLoged(true)};

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert(`El usuario ${user} y el password ${password} fue logueado exitosamente`);
  }; 

  useEffect(() => {
    console.log(user, password);
  }, [user, password]);
  
    return(
    <div>
      <form onSubmit={handleFormSubmit}>
        <input value={user} onChange={({target: {value}}) => setUser(value)}/>
        <br />
        <input type="password" value={password} onChange ={({target: {value}}) => setPassword(value)}  />
        <br />
        <br />
        <button onClick={handleLoginClick} >Log In</button>
        <br />
        <br />
        {isLoged && <h2><img src="logo192.png"></img>El login fue exitoso</h2>}
      </form>
      
    </div>);
}

export default App;
