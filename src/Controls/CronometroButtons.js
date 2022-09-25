import React from "react";
import './ContadorButtons.css';

function CronometroButtons({
                            clickStartStopCrono,
                            clickTemporizador,
                            isRunning,
                            estadoContador,
                            isDecrementing,
                            tempoStateOK,
                            clickReset}) {
   
    return (
        <li className='ItemsButton'>
            <button
                
                    className={ ((estadoContador >= 0) && !isDecrementing && !tempoStateOK) ? "Button TimerButton" : "InactiveButton"}
                    onClick={ clickStartStopCrono }
                                                  
                        
            >
                { isRunning ? "Detener Cronómetro" : "Iniciar Cronómetro"}
            </button>
            { !tempoStateOK ?
                <button
                    className={ (estadoContador > 0 && !isRunning ) ? "Button TimerButton" : "InactiveButton"}
                    onClick={ clickTemporizador }
                >
                    { isDecrementing ? "Detener Temporizador" : "Iniciar Temporizador" }
                </button>
                : <button
                    className="Button TimerButton"
                    onClick={ clickReset }
                >
                    Temporizador OK
                </button>

            }
      </li>
    );
};

export { CronometroButtons };