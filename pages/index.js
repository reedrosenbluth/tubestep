import "../styles/bulma.min.css";
import Head from "next/head";
import Sequence from "../components/Sequence";
import * as http from "superagent";

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      youtube: "https://www.youtube.com/watch?v=NbX9sLAtnhw",
      playing: false,
      pos: 0
    };
  }

  componentDidMount() {
    this.wavesurfer = WaveSurfer.create({
      container: "#waveform",
      plugins: [
        WaveSurfer.cursor.create({
          showTime: true,
          opacity: 1,
          customShowTimeStyle: {
            "background-color": "#000",
            color: "#fff",
            padding: "2px",
            "font-size": "10px"
          }
        })
      ]
    });

    this.wavesurfer.load("/song.mp3");
  }

  render() {
    return (
      <div>
        <Head>
          <title>tubestep</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <script src="https://unpkg.com/wavesurfer.js" />
          <script src="https://unpkg.com/wavesurfer.js/dist/plugin/wavesurfer.cursor.min.js" />
        </Head>
        <style jsx global>{`
          html {
            background: #151515;
          }

          body {
            color: white;
          }

          .title {
            color: white;
          }

          input.input {
            background-color: black;
            border: none;
            color: white;
          }
        `}</style>

        <section className="section">
          <div className="container">
            <h1 className="title">TUBE STEP</h1>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <input
              className="input"
              type="text"
              value={this.state.youtube}
              onChange={event => this.setState({ youtube: event.target.value })}
              onKeyPress={event => {
                if (event.key === "Enter") {
                  this.wavesurfer.empty();

                  http
                    .post("/song")
                    .send({ url: event.target.value })
                    .then(() => {
                      this.wavesurfer.load("/song.mp3");
                    })
                    .catch(console.error);
                }
              }}
            />

            <div id="waveform" />
            <button
              className="button is-black"
              onClick={() => {
                this.wavesurfer.playPause();
              }}
            >
              play/pause
            </button>
          </div>
        </section>
        <section
          className="section"
          style={{
            backgroundColor: "#272727",
            border: "2px solid #333",
            margin: "1rem"
          }}
        >
          <div className="container">
            <Sequence />
          </div>
        </section>
      </div>
    );
  }
}

export default Index;
