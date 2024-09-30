import "./styles/legends.scss";
import legends from "./legendsData";
import VerticalTxT from "./VerticalTxT";

function JazzLegends() {
  return (
    <div className="jazz-legends" id="jazzLegends">
      <div className="wrapper">
        <VerticalTxT text="Legends" />
        <div className="biogram">
          <h1>{legends[1].name}</h1>
          <p className="description">{legends[1].description}</p>
        </div>
      </div>
      <div className="img-legends"></div>
    </div>
  );
}

export default JazzLegends;
