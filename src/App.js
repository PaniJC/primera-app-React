import { useEffect, useState } from "react";

const jasonData = [{
  key:"1",
  name:"Juan Camilo"
},{
  key:"2",
  name:"Jeronimo"
},{
  key:"3",
  name:"Elizabeth"
},{
  key:"4",
  name:"Rachel"
},{
  key:"5",
  name:"Sebastian"
}];

//Como la función unicamente retorna algo, no es necesario tener las llaves; yo las voy a dejar. {jasonData?.map((value) =>())}
 //El interrogante se usa para validar si no existe la función de map porque sea un arreglo indefinod, que entonces lo ignore.
 //Tambien puedo colocar el index, pero como última opción
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    setTimeout(() => {
      setIsLoading(false);
    },4000);
  }, []);

   const renderData = () => {
    return jasonData?.map((value) => (
        <div key={value.key}> 
          <p>{value.name}</p>
        </div> 
    ))};

    return(
    <div>
      {isLoading ? <h2>Is Loading...</h2> : renderData()}  
    </div>
    );
}

export default App;
