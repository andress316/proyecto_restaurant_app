import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';


import Navbar from './components/navbar/navbar';
import Nosotros from './components/nosotros/nosotros';
import Reserva from './components/reserva/reserva';
import Cartola from './components/carta/Carta'





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
            path="/carta"
            element={ <Cartola /> }
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





