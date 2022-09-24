import React from "react";
import './SelectorRadioButton.css';

function SelectorRadioButton( {setRadioState, clickReset }) {
    return(
        <li className='SelectorRadioButton'>
            <input
                className="Button"
                type="radio"
                value="contador"
                name="radio-button"
                defaultChecked
                onChange={ () => {
                    setRadioState("contador");
                    clickReset();
                    }
                }
            /> Contador
            <input
                className="Button"
                type="radio"
                value="tiempo"
                name="radio-button"
                onChange={ () => {
                    setRadioState("tiempo");
                    clickReset();
                    }   
                }
            /> Tiempo
        </li>
    );
};

export { SelectorRadioButton };