import React from "react";
import './ContadorDisplay.css';

function ContadorDisplay( { estadoContador, setEstadoContador } ) {
    return(
        <p
            className="ContadorDisplay"
            id = "myInput"
            
            contentEditable="true"
            suppressContentEditableWarning="true"
            name = "myInput"
            
            onInput={() => console.log(document.getElementById('myInput').textContent)}
        >
            { estadoContador }</p>
    );
};

export {ContadorDisplay};