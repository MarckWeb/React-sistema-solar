import "./App.css";
import Planeta from "./componentes/Planeta";
import { useState } from "react";

function App() {
  let sistemaSolar = [
    {
      nombre: "mercurio",
      color: "gris",
      temperatura: 350,
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Mercury_in_color_-_Prockter07_centered.jpg/1024px-Mercury_in_color_-_Prockter07_centered.jpg",
    },
    {
      nombre: "venus",
      color: "blanco",
      temperatura: 460,
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/220px-Venus-real_color.jpg",
    },
    {
      nombre: "tierra",
      color: "morado",
      temperatura: 14,
      imagen:
        "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/5a0ab2a75bafe87f4d3f9a63/acaba-tiempo_0.jpg",
    },
    {
      nombre: "marte",
      color: "rojo",
      temperatura: -46,
      imagen:
        "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/55365b6b34099b0279c8fb2e/slide-marte.jpg",
    },
    {
      nombre: "jupiter",
      color: "marrón",
      temperatura: -121,
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Jupiter_by_Cassini-Huygens.jpg/280px-Jupiter_by_Cassini-Huygens.jpg",
    },
    {
      nombre: "saturno",
      color: "amarillo",
      temperatura: -130,
      imagen:
        "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/558d2b15010e26221b57df75/saturno.jpg",
    },
    {
      nombre: "urano",
      color: "azul",
      temperatura: -205,
      imagen: "http://www.manzanares.es/v2/sites/paseo/img/urano/urano1.jpg",
    },
    {
      nombre: "neptuno",
      color: "azul",
      temperatura: -220,
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/280px-Neptune_Full.jpg",
    },
  ];

  let [nuevoSistemaSolar, setNuevoSistemaSolar] = useState(sistemaSolar);

  const borrarPlaneta = () => {
    console.log('eliminando el ultimo...')
    nuevoSistemaSolar.pop();
    setNuevoSistemaSolar(nuevoSistemaSolar);
    console.log(nuevoSistemaSolar);

  };

  return (
    <div className="App">
      <h1> El Sistema Solar</h1>
      <button className="boton-eliminar" onClick={borrarPlaneta}>
        Eliminar Planeta
      </button>
      <div className="contenedor-planetas">
        <Planeta pintarPlanetas={ nuevoSistemaSolar } />
      </div>
    </div>
  );
}

export default App;
