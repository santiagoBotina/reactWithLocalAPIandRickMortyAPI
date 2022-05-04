import { useEffect, useState } from "react";
import "../App.css";

function Futbolistas() {
  const [state, setState] = useState([]);
  const [value, setValue] = useState([]);

  //*Montando componente */
  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setState(data);
      })
      .catch((err) => console.error(err));
  }, [value]);

  useEffect(() => {
    console.log("%ccomponente actualizado", "color: yellow");
  }, [state]);

  const handleSubmit = (e) => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setValue(data);
        console.log(value);
        console.log("Futbolista añadido");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h3>Mensajes</h3>
      <ul>
        {state.length === 0 && <p>Cargando.....</p>}
        {state.map((player, i) => {
          return (
            <li key={i}>
              <h4>Name: {player.name}</h4>
              <p>Age: {player.age}</p>
              <p>Nationality: {player.nationality}</p>
            </li>
          );
        })}
      </ul>
      <h3>Add a new message</h3>
      <form action="/api" method="post" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          className="input-form"
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          className="input-form"
        />
        <input
          type="text"
          name="nationality"
          placeholder="nationality"
          className="input-form"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Futbolistas;
