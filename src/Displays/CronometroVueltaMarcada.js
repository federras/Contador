function cronometroVueltaMarcada( tempo ) {
  
  return (
    <div>
        <span>
            {("0" + Math.floor((tempo / 60000) % 60)).slice(-2)}:
        </span>
        <span>
            {("0" + Math.floor((tempo / 1000) % 60)).slice(-2)}.
        </span>
        <span>
            {("0" + ((tempo / 10) % 100)).slice(-2)}
        </span>
    </div>
  );
}
  
export { cronometroVueltaMarcada };