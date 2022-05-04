import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Characters from "./components/Characters";
import Home from "./components/Home";
import Futbolistas from "./components/Futbolistas";
import "./App.css";

function App() {
  return (
    <div className="App-header">
      <h1>React app with Rick and Morty API</h1>
      <hr />
      <Link to="/">=Home=</Link>
      <Link to="/characters">=Characters=</Link>
      <Link to="/futbolistas">=Futbolistas=</Link>
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/futbolistas" element={<Futbolistas />} />
      </Routes>
    </div>
  );
}

export default App;
