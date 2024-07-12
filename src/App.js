import React from "react";
import List from './components/List';
import './App.css';
import './Goals.css';

function App() {
  
  
  const jugadores = [{name:"Edison Cavani",goles:13},
    { id: 1,name:"Miguel Merentiel",goles:11},
    { id: 2,name:"Kevin Zenon",goles:4},
    { id: 3,name:"Cristian Medina",goles:2}];

  return (
    <div className="Caja">    
      <List list={jugadores}/>      
    </div>
  );


}

export default App;
