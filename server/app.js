const express = require("express");
const next = require("next");

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const bodyParser = require("body-parser");
const ytdl = require("ytdl-core");
const ffmpeg = require("fluent-ffmpeg");

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(express.static("./server/audio"));

  server.post("/song", (req, res) => {
    let stream = ytdl(req.body.url, { quality: "highestaudio" });
    ffmpeg(stream)
      .audioBitrate(128)
      .save("./server/audio/song.mp3")
      .on("end", () => {
        res.send("song.mp3");
      });
  });

  server.get("*", (req, res) => {
    return handle(req, res); // for all the react stuff
  });

  server.listen(PORT, err => {
    if (err) throw err;
    console.log(`ready at http://localhost:${PORT}`);
  });
});
