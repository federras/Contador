import Timer from "./Timer";
  
function CronometroDisplay({ estadoContador }) {
  
  return (
    <div className="stop-watch">
      <Timer time={estadoContador} />
    </div>
  );
}
  
export { CronometroDisplay };