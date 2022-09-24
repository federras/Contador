import React from "react";
import "./ContadorButtons.css";

function MarcarVueltaButton( { marcarVuelta, borrarVueltas, vueltas } ) {
    return(
        <div className="ItemsButton">
            <button
                className="MarcarVueltaButtons"
                onClick={ marcarVuelta }
            >
                    Marcar Vuelta
            </button>
            { (vueltas[0]) ? <button
                className="MarcarVueltaButtons"
                onClick={ borrarVueltas }
            > 
                Borrar Vueltas
            </button> : <></>
            }
        </div>
    );
};

export { MarcarVueltaButton }