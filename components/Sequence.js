import Track from "../components/Track";

class Sequence extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      tempo: 120,
      clockOn: false,
      sequence: [
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false]
      ]
    };
  }

  componentWillUnmount() {
    clearInterval(this.stepID);
  }

  step() {
    const prev = this.state.step;
    const next = prev == 8 ? 1 : prev + 1;
    this.setState({
      step: next
    });
  }

  toggleCell(x) {
    return y => {
      let sequence = this.state.sequence;
      sequence[x][y] = !sequence[x][y];
      this.setState({
        sequence: sequence
      });
    };
  }

  toggleClock() {
    if (this.state.clockOn) {
      clearInterval(this.stepID);
      this.setState({
        clockOn: false
      });
    } else {
      this.stepID = setInterval(
        () => this.step(),
        ((1 / (this.state.tempo / 60)) * 1000) / 2
      );
      this.setState({
        clockOn: true
      });
    }
  }

  changeTempo(e) {
    this.setState({
      tempo: parseInt(e.target.value)
    });
  }

  render() {
    return (
      <div>
        <div className="columns">
          <div className="column is-1">
            <button className="button" onClick={() => this.toggleClock()}>
              start/stop
            </button>
          </div>
          <div className="column is-1">
            <input
              class="input"
              type="text"
              value={this.state.tempo}
              onChange={e => this.changeTempo(e)}
            />
          </div>
        </div>
        {this.state.sequence.map((track, i) => {
          return (
            <Track
              key={i}
              step={this.state.step}
              toggle={this.toggleCell(i)}
              sequence={track}
            />
          );
        })}
      </div>
    );
  }
}

export default Sequence;
