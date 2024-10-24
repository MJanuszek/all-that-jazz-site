import "./styles/legends.scss";

function VerticalTxT({ text }) {
  const letters = text.split("").map((letter, index) => (
    <span key={index} style={{ display: "block" }} className="title legends-h1">
      {letter}
    </span>
  ));
  return <h1>{letters}</h1>;
}

export default VerticalTxT;
