import './Carta-platos.css';


function Platillo({imagen,plato,descripcion,precio}) {

    return (
        <div className='containe-menu'>
            
            <div className='caja-plato-flex'>
                    <div>
                        <img src={process.env.PUBLIC_URL+`/images/${imagen}.jpg`} className='platoImg' />
                    </div>
                    <div className='plato-descripcion'>
                        <h2>{plato}</h2>
                        <p>{descripcion}</p>
                        <h3>{precio}</h3>
                    </div>
            </div>

        </div>

    );
}


export default Platillo;



// src='/images/chef_nosotros.jpg' className='platoImg'