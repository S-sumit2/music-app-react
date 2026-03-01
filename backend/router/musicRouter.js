const express = require("express");
const {
  showAlbums,
  showAlbum,
  addAlbum,
  updateAlbum,
  deleteAlbum,
} = require("../controller/musicController");

const routes = express.Router();

routes.get("/", showAlbums);
routes.get("/:id", showAlbum);
routes.post("/add", addAlbum);
routes.put("/:id", updateAlbum);
routes.delete("/:id", deleteAlbum);

module.exports = routes;
