import { BrowserRouter, Route, Link } from "react-router-dom";
import { useState } from "react";

const Quinteto = (props) => {
  let mostrarEquipo = props.equipo.map((jugador) => {
    return (
      <>
        <h3>{jugador.nombre}</h3>
        <img src={jugador.imagen} alt="" />
      </>
    );
  });
  return mostrarEquipo;
};

const Jugador = (props) => {
  return (
    <div>
      <h1>{props.nombre}</h1>
      <img src={props.imagen} alt="" />
      <p>Edad: {props.edad}</p>
      <p>Posición: {props.pos}</p>
      <p>Estatura: {props.estatura}</p>
    </div>
  );
};

const Cabecera = (props) => {
  return (
    <ul>
      <li>
        <Link to="/">Inicio</Link>
      </li>
      <li>
        <Link to="/quinteto">Quinteto</Link>
      </li>
      <li>
        <Link to="/jugador1">{props.equipo[0].nombre}</Link>
      </li>
      <li>
        <Link to="/jugador2">{props.equipo[1].nombre}</Link>
      </li>
      <li>
        <Link to="/jugador3">{props.equipo[2].nombre}</Link>
      </li>
      <li>
        <Link to="/jugador4">{props.equipo[3].nombre}</Link>
      </li>
      <li>
        <Link to="/jugador5">{props.equipo[4].nombre}</Link>
      </li>
    </ul>
  );
};

function App() {
  const [jugadores, setJugadores] = useState([
    {
      nombre: "Stephen Curry",
      pos: "Base",
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/3/36/Stephen_Curry_dribbling_2016_%28cropped%29.jpg",
      edad: "32",
      estatura: "1,91 m",
    },
    {
      nombre: "Andrew Wiggins",
      pos: "Escolta",
      imagen:
        "https://cdn.vox-cdn.com/thumbor/R5N_Hc-BNexYl4GJ1kEQK3-xoI0=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21848620/1204973590.jpg.jpg",
      edad: "25",
      estatura: "2,13 m",
    },
    {
      nombre: "Kelly Oubre Jr.",
      pos: "Alero",
      imagen:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fclutchpoints.com%2Fwarriors-rumors-golden-state-interested-trading-suns-kelly-oubre-jr%2F&psig=AOvVaw3nAUmuqY4w17A_snTVRmVJ&ust=1606927900618000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOinzIefre0CFQAAAAAdAAAAABAD",
      edad: "24",
      estatura: "2,01 m",
    },
    {
      nombre: "Draymond Green",
      pos: "Ala-Pivot",
      imagen:
        "https://storage.googleapis.com/mmc-elcaribe-bucket/uploads/2019/08/64714ce7-draymond-green.jpg",
      edad: "30",
      estatura: "1,98 m",
    },
    {
      nombre: "James Wiseman",
      pos: "Centro",
      imagen: "https://pbs.twimg.com/media/EnJhLyfXUAE66cA.jpg",
      edad: "19",
      estatura: "2,16 m",
    },
  ]);

  return (
    <BrowserRouter>
      <Cabecera equipo={jugadores} />
      <Route exact path="/"></Route>
      <Route exact path="/quinteto">
        <Quinteto equipo={jugadores} />
      </Route>
      <Route exact path="/jugador1">
        <Jugador
          nombre={jugadores[0].nombre}
          pos={jugadores[0].pos}
          imagen={jugadores[0].imagen}
          edad={jugadores[0].edad}
          estatura={jugadores[0].estatura}
        />
      </Route>
      <Route exact path="/jugador2">
        <Jugador
          nombre={jugadores[1].nombre}
          pos={jugadores[1].pos}
          imagen={jugadores[1].imagen}
          edad={jugadores[1].edad}
          estatura={jugadores[1].estatura}
        />
      </Route>
      <Route exact path="/jugador3">
        <Jugador
          nombre={jugadores[2].nombre}
          pos={jugadores[2].pos}
          imagen={jugadores[2].imagen}
          edad={jugadores[2].edad}
          estatura={jugadores[2].estatura}
        />
      </Route>
      <Route exact path="/jugador4">
        <Jugador
          nombre={jugadores[3].nombre}
          pos={jugadores[3].pos}
          imagen={jugadores[3].imagen}
          edad={jugadores[3].edad}
          estatura={jugadores[3].estatura}
        />
      </Route>
      <Route exact path="/jugador5">
        <Jugador
          nombre={jugadores[4].nombre}
          pos={jugadores[4].pos}
          imagen={jugadores[4].imagen}
          edad={jugadores[4].edad}
          estatura={jugadores[4].estatura}
        />
      </Route>
    </BrowserRouter>
  );
}

export default App;
