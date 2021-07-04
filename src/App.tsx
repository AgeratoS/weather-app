import React from 'react';
import './App.css';
import Search from "./components/Search";
import Card from './components/Card'

function App() {
  return (
    <div>
      <Search value={"AdfasdC"} onChange={event => {
        return null
      }} />
      <Card value={'Hello'} />
    </div>
  );
}

export default App;
