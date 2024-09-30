function VerticalTxT({ text }) {
  const letters = text.split("").map((letter, index) => (
    <span key={index} style={{ display: "block" }}>
      {letter}
    </span>
  ));
  return <h1>{letters}</h1>;
}

export default VerticalTxT;
