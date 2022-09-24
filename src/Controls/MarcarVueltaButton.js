import React from "react";
import "./ContadorButtons.css";

function MarcarVueltaButton( { marcarVuelta, borrarVueltas, vueltas } ) {
    return(
        <div className="MarcarVueltaButtons">
            <button
                className="ItemsButton"
                onClick={ marcarVuelta }
            >
                    Marcar Vuelta
            </button>
            { (vueltas[0]) ? <button
                className="ItemsButton"
                onClick={ borrarVueltas }
            > 
                Borrar Vueltas
            </button> : <></>
            }
        </div>
    );
};

export { MarcarVueltaButton }