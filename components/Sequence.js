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
      rimshot: "../static/rimshot.wav",
      "soft kick": "../static/kick_soft.wav",
      "heavy kick": "../static/kick_heavy.wav",
      bongo: "../static/bongo.wav"
    };

    const emptySequence = _.fill(Array(4), _.fill(Array(LENGTH), false));
    this.state = {
      step: 0,
      tempo: 120,
      clockOn: false,
      sequence: emptySequence,
      loader:
        "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0",
      sounds: Object.keys(this.drums)
    };
  }

  componentDidMount() {
    window.addEventListener("blur", () => {
      Tone.Transport.stop();
    });

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
        sequence: sequence,
        loader: this.toDseq(sequence)
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

  toDseq(sequence) {
    let output = "";
    sequence.forEach(track => {
      output += track.map(hit => (hit ? "1" : "0")).join(" ") + "\n";
    });
    output = output.slice(0, -1);
    return output;
  }

  fromDseq(input) {
    const tracks = input
      .replace(/\s/g, "")
      .match(new RegExp(".{1," + LENGTH + "}", "g"));
    console.log(tracks);
    let seq = [];
    tracks.forEach(track => {
      let t = [];
      for (var i = 0; i < track.length; i++) {
        let c = track.charAt(i);
        if (c === "1") {
          t.push(true);
        } else if (c === "0") {
          t.push(false);
        }
      }

      seq.push(t);
    });
    return seq;
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

        <br></br>
        <h2>load/save</h2>
        <form
          onSubmit={event => {
            event.preventDefault();
            this.setState({ sequence: this.fromDseq(this.state.loader) });
          }}
        >
          <textarea
            style={{
              width: "13rem",
              height: "3.4rem",
              fontFamily: "monospace",
              resize: "none",
              overflow: "hidden"
            }}
            value={this.state.loader}
            onChange={event => this.setState({ loader: event.target.value })}
          ></textarea>
          <br></br>
          <input type="submit" value="load" />
        </form>
      </div>
    );
  }
}

export default Sequence;
