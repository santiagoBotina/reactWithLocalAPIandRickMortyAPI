import { useEffect, useState } from "react";
import "../App.css";

function Messages() {
  const [messages, setMessages] = useState([]);

  //*Montando componente */
  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMessages(data.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h3>Mensajes</h3>
      <ul>
        {messages.length === 0 && <p>Cargando...</p>}
        {messages.map((message, i) => {
          return (
            <li key={i}>
              <h4>{message.name}</h4>
              <p>{message.msg}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Messages;
