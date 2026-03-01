import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditAlbum = () => {
  const [album, setAlbum] = useState({
    albumName: "",
    artist: "",
    releaseYear: "",
    genre: "",
    coverImg: "",
  });
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/music/${id}`)
      .then((res) => {
        setAlbum(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/music/${id}`, album)
      .then(() => {
        navigate(`/${id}`);
      })
      .catch((err) => {});
  };
  return (
    <>
      <div class="container mt-2">
        <div class="row justify-content-center align-items-center g-2">
          <div class="col">
            <div class="card">
              <div class="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="formId1"
                      id="formId1"
                      placeholder=""
                      onChange={(e) => {
                        setAlbum({ ...album, albumName: e.target.value });
                      }}
                      value={album.albumName}
                    />
                    <label for="formId1">Album Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="formId1"
                      id="formId1"
                      placeholder=""
                      onChange={(e) => {
                        setAlbum({ ...album, artist: e.target.value });
                      }}
                      value={album.artist}
                    />
                    <label for="formId1">Artist</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="formId1"
                      id="formId1"
                      placeholder=""
                      onChange={(e) => {
                        setAlbum({ ...album, releaseYear: e.target.value });
                      }}
                      value={album.releaseYear}
                    />
                    <label for="formId1">Release Year</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="formId1"
                      id="formId1"
                      placeholder=""
                      onChange={(e) => {
                        setAlbum({ ...album, genre: e.target.value });
                      }}
                      value={album.genre}
                    />
                    <label for="formId1">Genre</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="formId1"
                      id="formId1"
                      placeholder=""
                      onChange={(e) => {
                        setAlbum({ ...album, coverImg: e.target.value });
                      }}
                      value={album.coverImg}
                    />
                    <label for="formId1">Cover Image</label>
                  </div>

                  <div className="container text-center">
                    <button type="submit" className="btn btn-primary">
                      Edit Album
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditAlbum;
