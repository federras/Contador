import React from "react";
import './ContadorButtons.css'

function ContadorButtons( {clickSumar, clickRestar }) {

    return(
      <li className='ItemsButton'>
        <button 
          className="Button SumarButton"
          onClick={ clickSumar }
        >
          +
        </button>
        <button
          className="Button SumarButton"
          onClick={ clickRestar }
        >
          -
        </button>
      </li>
    );
};

export { ContadorButtons };