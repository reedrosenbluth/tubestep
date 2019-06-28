const express = require("express");
const http = require("http");

const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const ytdl = require("ytdl-core");
const ffmpeg = require("fluent-ffmpeg");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("./api/audio"));

app.post("/song", (req, res) => {
  let stream = ytdl(req.body.url, { quality: "highestaudio" });
  ffmpeg(stream)
    .audioBitrate(128)
    .save("./api/audio/song.mp3")
    .on("end", () => {
      res.send("song.mp3");
    });
});

app.get("*", (req, res) => {
  return handle(req, res); // for all the react stuff
});

module.exports = app;
