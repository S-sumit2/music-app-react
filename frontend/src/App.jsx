import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AddAlbum from "./components/AddAlbum";
import ShowAlbum from "./components/ShowAlbum";
import EditAlbum from "./components/EditAlbum";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddAlbum />} />
          <Route path="/:id" element={<ShowAlbum />} />
          <Route path="/edit/:id" element={<EditAlbum />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
