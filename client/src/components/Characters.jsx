import { useState, useEffect } from "react";
import "../App.css";

function RickAndMorty() {
  const [personajes, setPersonajes] = useState([]);

  //**MONTANDO COMPONENTE
  useEffect(() => {
    console.log("%cSe montó el componente", "color:green");
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPersonajes(data.results);
      })
      .catch((error) => console.error(error));
  }, []);

  //**ACTUALIZANDO COMPONENTE */
  useEffect(() => {
    console.log("%cSe actualizó el componente", "color: yellow");
  }, [personajes]);

  //**DESMONTANDO COMPONENTE */
  useEffect(() => {
    return () => console.log("%cSe desmontó el componente", "color: red");
  }, [personajes]);

  return (
    <div>
      <h3>PERSONAJES</h3>
      <ul className="list">
        {personajes.length === 0 && <p>Cargando...</p>}
        {personajes.map((personaje, i) => {
          return (
            <li key={i} className="character">
              <h3>{personaje.name}</h3>
              <img src={personaje.image} alt="avatar" width="150" />
              <p>
                <span className="card-subtitle">Status:</span>{" "}
                {personaje.status}
              </p>
              <p>
                <span className="card-subtitle">Gender:</span>{" "}
                {personaje.gender}
              </p>
            </li>
          );
        })}
      </ul>
      <button></button>
    </div>
  );
}

export default RickAndMorty;
