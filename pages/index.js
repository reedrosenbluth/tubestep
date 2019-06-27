import "../styles/styles.sass";
import Head from "next/head";
import Sequence from "../components/Sequence";

const Index = () => (
  <div>
    <Head>
      <title>tubestep</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
        {/* <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/NbX9sLAtnhw"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        /> */}
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

export default Index;
