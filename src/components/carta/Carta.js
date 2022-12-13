import Platillo from './carta-platos/Carta-platos';


export default function Cartola () {
  return (
    <div>
        <h1>Menú</h1>
        <Platillo imagen='chef_nosotros' plato='Ají de Gallina' descripcion='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the' precio='CLP 20.000'></Platillo>
        <Platillo imagen='lomo' plato='Lomo Salteado' descripcion='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the' precio='CLP 25.000'></Platillo>
        <Platillo imagen='ceviche' plato='Ceviche' descripcion='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the' precio='CLP 15.000'></Platillo>

    
    </div>     
  );
}



