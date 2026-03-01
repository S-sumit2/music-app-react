import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddAlbum = () => {
  const [album, setAlbum] = useState({
    albumName: "",
    artist: "",
    releaseYear: "",
    genre: "",
    coverImg: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:4000/music/add`, album)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="container mt-3 col-6">
        <div className="row justify-content-center align-items-center g-2">
          <div className="col">
            <div className="card">
              <div className="card-body">
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
                    />
                    <label for="formId1">Cover Image</label>
                  </div>

                  <div className="container text-center">
                    <button type="submit" className="btn btn-primary">
                      Add Album
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

export default AddAlbum;
