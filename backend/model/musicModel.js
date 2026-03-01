const mongoose = require("mongoose");

const musicSchema = mongoose.Schema(
  {
    albumName: String,
    artist: String,
    releaseYear: String,
    genre: String,
    coverImg: String,
  },
  {
    timestamp: true,
  },
);

module.exports = mongoose.model("music", musicSchema);
