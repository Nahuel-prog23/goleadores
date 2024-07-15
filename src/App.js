import React from "react";
import List from './components/List';
import './App.css';
import './Goals.css';

function App() {
  
  
  const jugadores = [{id: 0, Nombre:"Edison Cavani",Goles:13,Edad:37},
    { id: 1,Nombre:"Miguel Merentiel",Goles:11,Edad:28},
    { id: 2,Nombre:"Kevin Zenon",Goles:4,Edad:22},
    { id: 3,Nombre:"Cristian Medina",Goles:2,Edad:22}];
  
  const cabecera = [
    "Nombre",
    "Goles",
    "Edad"
  ];

  return (
    <div className="Caja">    
      <List list={jugadores} cabecera={cabecera}/>      
    </div>
  );


}

export default App;
