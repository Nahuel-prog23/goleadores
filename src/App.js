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

  const puntaje = [{id: 0, Club:"Talleres",PJ:5,DG:7,Pts:13},
    { id: 1,Club:"Huracán",PJ:5,DG:6,Pts:13},
    { id: 2,Club:"Unión",PJ:5,DG:5,Pts:13},
    { id: 3,Club:"Racing",PJ:5,DG:6,Pts:10}];

  const cabecera2 = [
     "Club",
     "PJ",
     "DG",
     "Pts"
   ];


  return (
    <>
    <h2>Goleadores Boca</h2>
    <div className="Caja">    
      <List list={jugadores} cabecera={cabecera}/>
    </div>
    <h2>Punteros</h2>
    <div className="Caja">  
      <List list={puntaje} cabecera={cabecera2}/>      
    </div>
    </>
  );


}

export default App;
