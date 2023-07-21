import React from "react";
import TipoC from "./types/tipoC.jsx";
import Talonario from "./types/talonario.jsx";
import TicketSuper from "./types/ticketSuper.jsx";
import { useState } from "react";
import "./App.css";

function App() {
  const [vista, setVista] = useState(0);

  return (
    <>
      <nav className="flex justify-center items-center py-2 border-b border-black">
        <ul className="p-0 m-0 flex justify-around items-center w-screen h-full gap-[5px]">
          <li
            className={`bg-${vista === 1 ? "green" : ""}-600 w-[200px] text-center border border-black hover:cursor-pointer`}
            onClick={(e) => setVista(1)}>
            Tipo C o B
          </li>
          <li
            className={`bg-${vista === 2 ? "green" : ""}-600 w-[200px] text-center border border-black hover:cursor-pointer`}
            onClick={(e) => setVista(2)}>
            Factura de talonario
          </li>
          <li
            className={`bg-${vista === 3 ? "green" : ""}-600 w-[200px] text-center border border-black hover:cursor-pointer`}
            onClick={(e) => setVista(3)}>
            Ticket de super
          </li>
        </ul>
      </nav>
      {vista === 0 && 
      <div className="w-screen flex justify-center items-center">
        <h1>Seleccione el que mas quiera</h1>
      </div>
      }
      {vista === 1 && <TipoC />}
      {vista === 2 && <Talonario />}
      {vista === 3 && <TicketSuper />}
    </>
  );
}
export default App;
