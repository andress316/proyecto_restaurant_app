import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';

import Menu from './components/menu/menu.js';
import Navbar from './components/navbar/navbar.js';
import Nosotros from './components/nosotros/nosotros.js';
import Reservas from './components/reservas/reservas.js';




function App() {
  return (
    <div className="App">
  
      
      
      <Navbar />

      <Router>
        <Routes>

          <Route
            path="/nosotros"
            element={ <Nosotros /> }
          />

          <Route
            path="/menu"
            element={ <Menu /> }
          />

          <Route
            path="/Reservas"
            element={ <Reservas /> }
          />

          <Route
            path="/"
            element={ <Nosotros /> }
          />
          

        </Routes>
      </Router>
   
   
    </div>
  );
}

export default App;





