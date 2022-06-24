import React, { useState } from "react";
import Action from "./components/Actions.jsx";
import Filter from "./components/Filter.jsx";
import LogIn from "./components/LogIn.jsx";
import Table from "./components/Table.jsx";
import './styles/app.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  if(isLoggedIn){
    return(
    <LogIn onLogIn={setIsLoggedIn}/>
    );
  }
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
