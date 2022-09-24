import React from "react";
import './ResetButton.css'

function ResetButton( {clickReset}) {
    return(
        <button
            className="ResetButton"
            onClick={ clickReset }
        >
            Reset
        </button>
    );
};

export { ResetButton };