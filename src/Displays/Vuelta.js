import React from "react";
import './Vuelta.css'

function Vuelta( {id, tempo, diferencia, cronometroVueltaMarcada, radioState }) {
    return(
        <ul className="Vuelta">
            Vuelta N° {id}: &nbsp; {
                    (radioState === "contador") ? tempo :
                cronometroVueltaMarcada(tempo) }&nbsp;
                - &nbsp;Diferencia: &nbsp;
                { (radioState === "contador") ? diferencia : cronometroVueltaMarcada(diferencia) }   &nbsp;-  &nbsp;
            <p contentEditable="true"
                suppressContentEditableWarning="true">
                    Click para editar nombre
            </p>
        </ul>
    );
};

export { Vuelta }