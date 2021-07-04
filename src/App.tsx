import React from 'react';
import './App.css';
import Search from "./components/Search";

function App() {
  return (
    <div>
      <Search value={"AdfasdC"} onChange={event => {
        return null
      }} />
    </div>
  );
}

export default App;
