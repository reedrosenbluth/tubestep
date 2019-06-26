import Track from "../components/Track";
import Tone from "tone";

class Sequence extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
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

  componentDidMount() {
    var keys = new Tone.Players(
      {
        kick: "../static/808kick.wav"
      },
      {
        volume: -10,
        fadeOut: "64n"
      }
    ).toMaster();

    var loop = new Tone.Sequence(
      (time, step) => {
        this.state.sequence.forEach(track => {
          if (track[step]) {
            keys.get("kick").start(time, 0, "32n", 0, 1);
          }
        });

        Tone.Draw.schedule(() => {
          this.step();
        }, time);
      },
      [0, 1, 2, 3, 4, 5, 6, 7],
      "8n"
    ).start(0);

    Tone.Transport.on("stop", () => {
      setTimeout(() => {
        this.setState({
          step: 0,
          clockOn: false
        });
      }, 100);
    });
  }

  componentWillUnmount() {
    clearInterval(this.stepID);
  }

  step() {
    const cur = this.state.step;
    const next = cur == 8 ? 1 : cur + 1;
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
      Tone.Transport.stop();
    } else {
      Tone.Transport.bpm.value = this.state.tempo;
      Tone.Transport.start();
      this.setState({
        clockOn: true
      });
    }
  }

  bpmToMs(bpm) {
    return ((1 / (bpm / 60)) * 1000) / 2;
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
              className="input"
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
