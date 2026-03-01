import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [album, setAlbum] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/music/")
      .then((res) => {
        setAlbum(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="container mt-3">
        <div className="row justify-content-center align-items-center g-2">
          {album.map((a) => (
            <div className="col">
              <div className="card p-2 m-3">
                <img className="card-img" src={a.coverImg} alt="Title" />
                <div className="card-body">
                  <h4 className="card-title">{a.albumName}</h4>
                  <p className="card-text">{a.artist}</p>
                  <NavLink
                    name=""
                    id=""
                    className="btn btn-primary"
                    to={`/${a._id}`}
                    role="button"
                  >
                    Read more
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
