import FormularioContacto from './FormularioContacto/FormularioContacto';
import "./Contacto.css";

export default function Contacto() {

    return (
        <div className='flex-container'>
            <div className='caja'>
                <img src={process.env.PUBLIC_URL+'/images/chef_nosotros.jpg'} className='nosotrosImg'></img>
            </div>

            <div className='caja'>
                <h2>Nuestro Restaurant</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>

            <FormularioContacto />

        </div>

    )

}

// /images/chef_nosotros.jpg