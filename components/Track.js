const style = (on, hit, i) => {
  const emph = i == 0 || i % 4 == 0;
  return {
    backgroundColor: hit
      ? on
        ? "#fff9c9"
        : "#daf5db"
      : emph
      ? "#9e9e9e"
      : "#b7b7b7",
    border: "1px solid grey",
    height: "3rem"
  };
};

const steps = (step, sequence, toggle) => {
  return sequence.map((hit, i) => {
    return (
      <div
        className="column"
        key={i}
        style={style(step == i + 1, hit, i)}
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
