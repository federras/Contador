import React from "react";
import './ContadorButtons.css'

function ContadorButtons( {clickSumar, clickRestar, tempoStateOK }) {

    return(
      <li className='ItemsButton'>
        <button 
          className= { !tempoStateOK ? "Button SumarButton" : "SumarButton SumarButtonInactive" }
          onClick={ clickSumar }
        >
          +
        </button>
        <button
          className= { !tempoStateOK ? "Button SumarButton" : "SumarButton SumarButtonInactive" }
          onClick={ clickRestar }
        >
          -
        </button>
      </li>
    );
};

export { ContadorButtons };