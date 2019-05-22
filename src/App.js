import React from 'react';
import logo from './logo.svg';
import mongodb from './mongodb.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

//Importamos nuestro componente

import Contador from './Contador';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="row">
          <div class="column">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div class="column">
            <img src={mongodb} className="Mongodb-logo" alt="logo" />
          </div>
        </div>
        <Contador/>
      </header>
    </div>
  );
}

export default App;
