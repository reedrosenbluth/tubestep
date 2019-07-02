import "../styles/bulma.min.css";
import "../styles/style.css";
import Sequence from "../components/Sequence";
import Head from "next/head";

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <Head>
          <title>tubestep</title>
        </Head>

        <section className="section">
          <div className="container">
            <h1 className="title">TUBE STEP</h1>
          </div>
        </section>

        <section className="sequence">
          <div className="container">
            <Sequence />
          </div>
        </section>
      </div>
    );
  }
}

export default Index;
