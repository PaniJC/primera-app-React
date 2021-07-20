import React from "react";
//import { useState, Component } from "react";

//El componente es reactiuvo porque se está llamando una y otra vez y está actualizando lo que tiene que actualizar
class App extends React.Component { // Este es un componente funcional y no de clase
  
    constructor(props){
      super(props);
      this.state = {
        email:'',
        password:'',
        note:''
      }
    }

    handleEmailChange = (event) => {
      const { value }  =  event.target;
      this.setState({ email: value });
      
    };

    handlePasswordChange = (event) => { //Otra forma de hacerlo
      const { value } =   event.target;
      this.setState({ password: value });
    };
  
    handleFormSubmit = (event) => { //Otra forma de hacerlo
      event.preventDefault();
      alert(`Usuario: ${this.state.email}, Password: ${this.state.password}`);
    };

    handleNoteAppear = (event) => {
      if(this.state.email==="juan77camilo@gmail.com") {
        this.setState({note: 'Exitosa'});
      } else {
        this.setState({note: 'Errónea'});
      }
    };
  
    render(){
      const { email } = this.state; // Llevamos lo que hay por pantalla en ese momento en la constante de estado email
      const { password } = this.state; // Llevamos lo que hay por pantalla en ese momento en la constante de estado password
      const {note} = this.state;
      console.log({ email });
      console.log({ password });
      return (
        <div className="App">
          <form onSubmit={this.handleFormSubmit}>
            <h2>Inciar sesión</h2>
            <label>
              Correo
              <input type="email" value={email} onChange = {this.handleEmailChange}/>
            </label>
            <label>
              Contraseña
              <input type="password" value={password} onChange = {this.handlePasswordChange}/>
            </label>
            <button type="submit" onClick={this.handleNoteAppear}>
              Enter
            </button>
            <h1 value={note} >
              Trabajo realizaro de manera {this.state.note}
            </h1>
          </form>
        </div>
      );
    }
        
  }

export default App;
