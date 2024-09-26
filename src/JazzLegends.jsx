import "./styles/legends.scss";
import legends from "./legendsData";

function JazzLegends() {
  return (
    <div className="jazz-legends" id="jazzLegends">
      <h1>Jazz Legends</h1>
      <div className="biogram">{legends[1].description}</div>
      <div className="img-legends"></div>
    </div>
  );
}

export default JazzLegends;
