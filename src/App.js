import React from "react";
import Action from "./components/Actions.jsx";
import Filter from "./components/Filter.jsx";
import Table from "./components/Table.jsx";
import './styles/app.css';

function App() {
  return (
    <div className="App">
      <Action responsible="Aleks" />
      <div className="wraper">
        <Filter/>
        <Table/>
      </div>    
    </div>
  );
}

export default App;
