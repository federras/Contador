import React from "react";
import './ContadorButtons.css'

function ContadorButtons( {clickSumar, clickRestar }) {

    return(
      <li className='ItemsButton'>
        <button 
          className="ContadorButton"
          onClick={ clickSumar }
        >
          +
        </button>
        <button
          className="ContadorButton"
          onClick={ clickRestar }
        >
          -
        </button>
      </li>
    );
};

export { ContadorButtons };