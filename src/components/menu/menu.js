import Plato from './menu-platos/Plato';


function Menu() {
  return (
    <div>
        <h1>Menú</h1>
        <Plato imagen='chef_nosotros' plato='Ají de Gallina' descripcion='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the' precio='CLP 20.000'></Plato>
        <Plato imagen='lomo' plato='Lomo Salteado' descripcion='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the' precio='CLP 25.000'></Plato>
        <Plato imagen='ceviche' plato='Ceviche' descripcion='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the' precio='CLP 15.000'></Plato>

    
    </div>     
  );
}



export default Menu;