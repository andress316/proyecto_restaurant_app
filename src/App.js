import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

import Menu from './components/menu/Menu';
import Navbar from './components/navbar/navbar';
import Nosotros from './components/nosotros/nosotros';
import Reserva from './components/reserva/reserva';





function App() {
  return (
    <div className="App">

      <Navbar />

      
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
            element={ <Reserva /> }
          />

          <Route
            path="/"
            element={ <Nosotros /> }
          />
          

        </Routes>
      
   

   
    </div>
  );
}

export default App;





