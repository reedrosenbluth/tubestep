const style = (on, hit) => {
  return {
    backgroundColor: hit ? (on ? "#fff9c9" : "#c9ffcb") : "white",
    border: "2px solid " + (on ? "black" : "grey"),
    margin: ".5rem",
    height: "3rem"
  };
};

const steps = (step, sequence, toggle) => {
  return sequence.map((hit, i) => {
    return (
      <div
        className="column"
        key={i}
        style={style(step == i + 1, hit)}
        onClick={() => toggle(i)}
      />
    );
  });
};

const Track = props => (
  <div className="columns">
    {steps(props.step, props.sequence, props.toggle)}
  </div>
);

export default Track;
