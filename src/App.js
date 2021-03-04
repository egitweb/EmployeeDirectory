import React from "react";
import Table from "./components/TableContainer";

import './App.css';

function App() {

  
  return (
    <div className="App">
    <div className="banner text-center">
    <h1><i className="fa fa-address-book" aria-hidden="true" /> Employee Directory</h1>
    </div>
    <Table/>
  </div>
  );
}

export default App;
