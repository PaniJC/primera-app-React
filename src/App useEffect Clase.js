import { useState, Component } from "react";

//El componente es reactiuvo porque se está llamando una y otra vez y está actualizando lo que tiene que actualizar
class App extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
    this.state = {
      name: "",
    }
  }

  //Es bueno tenerlo para hacer llamadas a la API o cualquier llamado a acción o función enc aso que el cliente lo requiera
  componentDidMount() {
    console.log("Did Mount");
  }

  //Componente que se ejecuta en el ciclo de vida, cuando el componente se actualiza; unicamente se ejecuta cuando nosotros estamos actualizando el componente. El escribir dentro de un input me está provocando un rerenderizado. Si necesitara ejecutar una operación después de que cambie el estado, por acá se puede hacer.
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Did Update");
  }

  //Le digo a la aplicaión que NO se actualice con nada del mundo (si es false); sirve para prevenir rerenderizers innecesarios
  shouldComponentUpdate() {
    return true;
  }

  //Sirve para hacer ciertos cálculos que caigan a componentDidUpdate
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("prevProps, prevState");
  }

  render() {
    return(<div>
      <input value={this.state.name} onChange = {({target: { value }}) => this.setState({ name: value})} />
    </div>);
  }
}
export default App;
