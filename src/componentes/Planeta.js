import "../hojas-de-estilo/Planeta.css";
import { useState } from "react";

export default function Planeta({ pintarPlanetas }) {
    console.log(pintarPlanetas);

    //creo un estado donde le asigno los valores de pintarPlanetas (valores array)
    const [arrayPlanetas, setArrayPlanetas] = useState(pintarPlanetas)

    //creo una funcion donde filtro valores diferentes del seleccionado
    function eliminarPlaneta(nombre) {
        console.log('eliminando...')
        const nuevoPlanetas = arrayPlanetas.filter((planeta) => planeta.nombre !== nombre);
        //nuevoPlanetas le asigno como como parametro a la funcion set, para que tome los nuevos valores
        setArrayPlanetas(nuevoPlanetas)
    }

    return (
        <>{arrayPlanetas.map((planeta, index) => {
            return (
                <article className="articulos-planetas" key={index}>
                    <h2>{planeta.nombre}</h2>
                    <p className="texto">
                        {planeta.color}, {planeta.temperatura}
                    </p>
                    <img
                        className="imagen-planeta"
                        src={planeta.imagen}
                        alt={`Foto del planeta ${planeta.nombre}`}
                    />
                    <button
                        className='boton-eliminar '
                        // con la funcion anonima dentro solo se ejecuta cuando el boton se haga clic...si envio directamente la funcion haria que se llame de inmediato y haga un bucle infinito
                        onClick={() => eliminarPlaneta(planeta.nombre)}
                    >Eliminar</button>
                </article>
            );
        })
        }</>
    );
}
