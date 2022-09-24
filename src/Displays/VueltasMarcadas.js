import React from "react";
import { Vuelta } from "./Vuelta";
import './VueltasMarcadas.css';

function VueltasMarcadas( {vueltas, cronometroVueltaMarcada, radioState}) {
    return(
        <li className="ListaVueltas">
            { vueltas.map( vuelta => (
                <Vuelta
                    key= { vuelta.id }
                    id = { vuelta.id }
                    tempo = { vuelta.tempo }
                    diferencia = { vuelta.diferencia }
                    cronometroVueltaMarcada = { cronometroVueltaMarcada }
                    radioState = {radioState}
                />
            ))}
        </li>
    );
};

export { VueltasMarcadas }