import { useState, useEffect } from "react";
import "../App.css";

function RickAndMorty() {
  const [personajes, setPersonajes] = useState([]);
  const [pagina, setPagina] = useState(1);

  function pasarPagina() {
    setPagina(pagina + 1);
  }

  function regresarPagina() {
    setPagina(pagina - 1);
  }

  //**MONTANDO COMPONENTE
  useEffect(() => {
    console.log("%cSe montó el componente", "color:green");
    fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`)
      .then((response) => response.json())
      .then((data) => {
        setPersonajes(data.results);
      })
      .catch((error) => console.error(error));
  }, [pagina]);

  //**DESMONTANDO COMPONENTE */
  useEffect(() => {
    return () => console.log("%cSe desmontó el componente", "color: red");
  }, [personajes]);

  return (
    <div className="div-container">
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
      <button className="pagina-button" onClick={regresarPagina}>
        Página anterior
      </button>
      <button className="pagina-button" onClick={pasarPagina}>
        Siguiente página
      </button>
    </div>
  );
}

export default RickAndMorty;
