import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const ShowAlbum = () => {
  const [album, setAlbum] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios(`http://localhost:4000/music/${id}`)
      .then((res) => {
        setAlbum(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const navigate = useNavigate();
  const handleDelete = () => {
    axios
      .delete(`http://localhost:4000/music/${id}`)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="container mt-2">
        <div className="row justify-content-center align-items-center g-2">
          <div className="col ">
            <div className="card p-2 m-3">
              <img className="card-img" src={album.coverImg} alt="Title" />
              <div className="card-body">
                <h4 className="card-title"> Album Name: {album.albumName}</h4>
                <p className="card-text">Artist Name: {album.artist}</p>
                <p className="card-text">Genre: {album.genre}</p>
                <p className="card-text">Release Year: {album.releaseYear}</p>
                <NavLink
                  name=""
                  id=""
                  className="btn btn-warning"
                  to={`/edit/${id}`}
                  role="button"
                >
                  Edit Album
                </NavLink>
                &nbsp;
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleDelete}
                >
                  Delete
                </button>
                &nbsp;
                <NavLink
                  name=""
                  id=""
                  className="btn btn-secondary"
                  to="/"
                  role="button"
                >
                  Back
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowAlbum;
