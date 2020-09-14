import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Routers from './components/Routers';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="container pt-5">
        <Routers/>
        </div>
      </Router>
    </div>
  );
}

export default App;
