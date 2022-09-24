import React from "react";
import './ContadorButtons.css';

function CronometroButtons({clickStartStopCrono, clickTemporizador, isRunning, estadoContador, isDecrementing}) {
    return (
        <li className='ItemsButton'>
            <button 
                className={ ((estadoContador >= 0) && !isDecrementing) ? "ContadorButton" : "InactiveButton"}
                onClick={ clickStartStopCrono }
            >
                { isRunning ? "Detener Cronómetro" : "Iniciar Cronómetro"}
            </button>
                <button
                className={ (estadoContador > 0 && !isRunning ) ? "ContadorButton" : "InactiveButton"}
                onClick={ clickTemporizador }
            >
                { isDecrementing ? "Detener Temporizador" : "Iniciar Temporizador" }
            </button>
      </li>
    );
};

export { CronometroButtons };