const mongoose = require("mongoose");
const musicModel = require("../model/musicModel");

exports.addAlbum = async (req, resp) => {
  const album = new musicModel(req.body);
  const result = await album.save();
  resp.status(200).json(result);
};

exports.showAlbums = async (req, resp) => {
  const albums = await musicModel.find();
  if (albums != null) {
    resp.status(200).json(albums);
  } else {
    resp.status(404).json({ message: "no recourd found..." });
  }
};

exports.showAlbum = async (req, resp) => {
  const album = await musicModel.findById(req.params.id);
  if (album != null) {
    resp.status(200).json(album);
  } else {
    resp.status(404).json({ message: "no recourd found..." });
  }
};

exports.updateAlbum = async (req, resp) => {
  const album = await musicModel.findByIdAndUpdate(req.params.id, req.body);
  if (album != null) {
    resp.status(200).json({ message: "album updated..." });
  } else {
    resp.status(404).json({ message: "no recourd found..." });
  }
};

exports.deleteAlbum = async (req, resp) => {
  const album = await musicModel.findByIdAndDelete(req.params.id);
  if (album != null) {
    resp.status(200).json({ message: "album deleted..." });
  } else {
    resp.status(404).json({ message: "no recourd found..." });
  }
};
