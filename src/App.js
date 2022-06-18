import React from "react";
import Action from "./components/actions.";
import Filter from "./components/filter";
import Table from "./components/table";
import './styles/app.css';

function App() {
  return (
    <div className="App">
      <Action/>
      <div className="wraper">
        <Filter/>
        <Table/>
      </div>    
    </div>
  );
}

export default App;
