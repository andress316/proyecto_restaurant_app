import FormularioContacto from './FormularioContacto/FormularioContacto.js';
import "./Contacto.css";

export default function Contacto() {

    return (
        <div className='flex-container'>
            <div className='caja'>
                <img src='/images/chef_nosotros.jpg' className='nosotrosImg'></img>
            </div>

            <div className='caja'>
                <h2>Nuestro Restaurant</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>

            <FormularioContacto />

        </div>

    )

}