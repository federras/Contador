import React from 'react';
import { useState } from 'react';
import { Title } from './Title';
import { SelectorRadioButton } from './Controls/SelectorRadioButton';
import { ResetButton } from './Controls/ResetButton';
import { ContadorDisplay } from './Displays/ContadorDisplay';
import { ContadorButtons } from './Controls/ContadorButtons';
import { CronometroDisplay } from './Displays/CronometroDisplay';
import { CronometroButtons } from './Controls/CronometroButtons';
import { MarcarVueltaButton } from './Controls/MarcarVueltaButton';
import './App.css';
import { VueltasMarcadas } from './Displays/VueltasMarcadas';
import { cronometroVueltaMarcada } from './Displays/CronometroVueltaMarcada';

function App() {

  const [estadoContador, setEstadoContador] = useState(0);
  const [radioState, setRadioState] = useState("contador");
 
  const clickSumar = () => {
    if (!tempoStateOK) {
      const display = Number(document.getElementById('myInput').textContent)
        if (radioState === "contador" && !isRunning && !isDecrementing) {
          (display === estadoContador) ? setEstadoContador(estadoContador+1) : setEstadoContador(display+1);
        } else {
          if (radioState === "tiempo" && !isRunning && !isDecrementing) {
            (display === estadoContador/1000) ? setEstadoContador(estadoContador+1000)
              : setEstadoContador(display*1000+(estadoContador%1000)+1000)
          }
        }
    }
  }

  const clickRestar = () => {
    if (!tempoStateOK) {
      const display = Number(document.getElementById('myInput').textContent)
      if (radioState === "contador" && !isRunning && !isDecrementing) {
        (display === estadoContador) ? setEstadoContador(estadoContador-1) : setEstadoContador(display-1);
      } else {
        if (radioState === "tiempo" && !isRunning && !isDecrementing) {
          (display === estadoContador/1000) ? setEstadoContador(estadoContador-1000)
              : setEstadoContador(display*1000+(estadoContador%1000)-1000)
        }
      }
    }
  }
  
  const clickReset = () => {
    setEstadoContador(0);
    setIsRunning(false);
    setIsDecrementing(false);
    borrarVueltas();
    // temporizadorOK();
    clearInterval(myChangeColorInterval.current);
    setMainContainer('Main1');
    setTempoStateOK(false);
  };

  //------------------------------------------------------

    const [isRunning, setIsRunning] = React.useState(false);
    const [isDecrementing, setIsDecrementing] = React.useState(false);
    const myInterval = React.useRef();

    const clickStartStopCrono = () => {
        if (estadoContador >= 0 && !isDecrementing && !tempoStateOK) {
          setIsRunning((isRunning) => !isRunning);
        }
    }

    const clickTemporizador = () => {
      if (estadoContador >0 && !isRunning) {
        setIsDecrementing((isDecrementing) => !isDecrementing);
      }
    }

    React.useEffect(() => {
        if (isDecrementing && estadoContador === 0) {
          setIsDecrementing(false);
          alternarChangeColor();  
        }
    }, [isDecrementing, estadoContador])

    React.useEffect(()=>{
      const display = Number(document.getElementById('myInput').textContent);
      if (radioState === "contador") {
        if (isRunning) {
          (display === estadoContador) ? setEstadoContador(estadoContador) : setEstadoContador(display);
          myInterval.current =
              setInterval(() => {
                  setEstadoContador((cont) => cont +1);
              }, 1000);
        } else {
            clearInterval(myInterval.current);
        } 
      } else {//si radioState está en Tiempo.
        if (isRunning) {
          (display === estadoContador/1000) ? setEstadoContador(estadoContador+1000)
            : setEstadoContador(display*1000+(estadoContador%1000)+990)
          myInterval.current =
              setInterval(() => {
                  setEstadoContador((cont) => cont + 10);
              }, 10);
        } else {
            clearInterval(myInterval.current);
        } 
      }
    }, [isRunning]);

    React.useEffect(()=>{
      const display = Number(document.getElementById('myInput').textContent)
      if (radioState === "contador") {
        if (isDecrementing) {
          (display === estadoContador) ? setEstadoContador(estadoContador) : setEstadoContador(display);
          myInterval.current =
              setInterval(() => {
                  setEstadoContador((cont) => cont -1);
              }, 1000);
        } else {
            clearInterval(myInterval.current);
        } 
      } else { //si radioState está en Tiempo
          if (isDecrementing) {
            (display === estadoContador/1000) ? setEstadoContador(estadoContador-1000)
            : setEstadoContador(display*1000+(estadoContador%1000)-990)
            myInterval.current =
                setInterval(() => {
                    setEstadoContador((cont) => cont -10);
                }, 10);
          } else {
              clearInterval(myInterval.current);
          } 
      }
    }, [isDecrementing]);

    // const temporizadorOK = () => {
    //   clearInterval(myChangeColorInterval.current);
    //   setMainContainer('Main1');
    // }

    
    const [mainContainer, setMainContainer] = useState("Main1");
   
    const changeColor = () => {
      if (mainContainer === "Main1") {
        setMainContainer(() => "Main2");
      } else {setMainContainer(() => "Main1")};
      console.log(mainContainer);
    }

    const myChangeColorInterval = React.useRef();
    const [tempoStateOK, setTempoStateOK] = useState(false)

    const alternarChangeColor = () => {
        myChangeColorInterval.current =
        setInterval(() => {
          changeColor();
        }, 2000);
        setTempoStateOK(true);
    }
   
    // React.useEffect(() => {
    //   // console.log('aaa');
      
    // },[mainContainer]);

    //-------------------------------------------------
  
    const [vueltas, setVuelta] = React.useState([]);
    
    const marcarVuelta = () => {
        let newVuelta = {
          id: vueltas.length + 1,
          tempo: estadoContador,
          diferencia: 0
        }
        if (vueltas.length>=1) {
            newVuelta.diferencia = estadoContador - vueltas[vueltas.length-1].tempo;
        }     
        setVuelta( () => [...vueltas, newVuelta]);
    }

    const borrarVueltas = () => {
      setVuelta([]);
    }

  return (
    <div className={ mainContainer } >
      <Title />
      <SelectorRadioButton
        setRadioState = { setRadioState }
        clickReset = { clickReset }
      />
      <ResetButton
        clickReset = { clickReset }
      />
      
      { radioState === "contador" ?
        <ContadorDisplay
          estadoContador = { estadoContador }
          /> :
        <CronometroDisplay
          estadoContador = { estadoContador }
          setEstadoContador = {setEstadoContador}
        /> }
      <ContadorButtons
        clickSumar = { clickSumar }
        clickRestar = { clickRestar }
        tempoStateOK = { tempoStateOK }
      />
      <CronometroButtons
        clickStartStopCrono = { clickStartStopCrono }
        clickTemporizador = {clickTemporizador}
        isRunning = { isRunning }
        estadoContador = { estadoContador }
        isDecrementing = { isDecrementing }
        tempoStateOK = { tempoStateOK }
        clickReset = { clickReset }
      />
      { isRunning ? <MarcarVueltaButton
        marcarVuelta = { marcarVuelta }
        borrarVueltas = { borrarVueltas }
        vueltas = { vueltas }
      /> : <></> }
      <VueltasMarcadas
        vueltas = { vueltas }
        cronometroVueltaMarcada = {cronometroVueltaMarcada}
        radioState = { radioState }
      >
      </VueltasMarcadas>
    </div>
  );
};

export default App;
