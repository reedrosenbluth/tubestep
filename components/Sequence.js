import Track from "./Track";
import Tone from "tone";
import _ from "lodash";

const LENGTH = 16;

class Sequence extends React.Component {
  constructor(props) {
    super(props);
    this.drums = {
      kick: "../static/808kick.wav",
      hat: "../static/hat.wav",
      snare: "../static/snare.wav",
      rimshot: "../static/rimshot.wav"
    };

    const emptySequence = _.fill(Array(4), _.fill(Array(LENGTH), false));
    this.state = {
      step: 0,
      tempo: 120,
      clockOn: false,
      sequence: emptySequence,
      sounds: Object.keys(this.drums)
    };
  }

  componentDidMount() {
    var keys = new Tone.Players(this.drums, {
      volume: 0,
      fadeOut: "64n"
    }).toMaster();

    var loop = new Tone.Sequence(
      (time, step) => {
        this.state.sequence.forEach((track, i) => {
          if (track[step]) {
            keys.get(this.state.sounds[i]).start(time, 0, "32n", 0, 1);
          }
        });

        Tone.Draw.schedule(() => {
          this.step();
        }, time);
      },
      _.range(LENGTH),
      LENGTH.toString() + "n"
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

  step() {
    const cur = this.state.step;
    const next = cur == LENGTH ? 1 : cur + 1;
    this.setState({
      step: next
    });
  }

  componentWillUnmount() {
    clearInterval(this.stepID);
  }

  toggleCell(x) {
    return y => {
      let sequence = _.map(this.state.sequence, _.clone);
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
            <button
              className="button is-black"
              onClick={() => this.toggleClock()}
            >
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

        <div className="columns">
          <div className="column is-1" />
          <div className="column">
            <div className="columns">
              {_.times(LENGTH, i => {
                return (
                  <div className="column" key={i}>
                    <div
                      className="indicator"
                      style={{
                        backgroundColor:
                          this.state.step == i + 1 ? "grey" : "#232323"
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {this.state.sequence.map((track, i) => {
          return (
            <div className="columns">
              <div className="column is-1 sound-select">
                <div className="field">
                  <div className="control">
                    <div className="select is-small">
                      <select
                        className="is-black"
                        value={this.state.sounds[i]}
                        onChange={event => {
                          let clone = _.clone(this.state.sounds);
                          clone[i] = event.target.value;
                          this.setState({
                            sounds: clone
                          });
                        }}
                      >
                        {Object.keys(this.drums).map(drum => (
                          <option>{drum}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="column">
                <Track
                  key={i}
                  step={this.state.step}
                  toggle={this.toggleCell(i)}
                  sequence={track}
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Sequence;
