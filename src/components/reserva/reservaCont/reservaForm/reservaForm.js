import { useFormik } from 'formik';
import { db } from '../../../../config/firestore';
import { addDoc, collection } from "firebase/firestore";

export default function FormularioContacto () {
  const { handleSubmit, handleChange, values } = useFormik( {
    initialValues: {
      name: "",
      apellido: "",
      email: "",
      personas: ""
    },
    onSubmit: async function ( values ) {
      console.log( values )
      try {
        const docRef = await addDoc( collection( db, "Reservas" ), values );
        console.log( "Se ha escrito la reserva con el ID: ", docRef.id );
      } catch ( e ) {
        console.error( "Error al crear reserva: ", e );
      }
    }
  } )

  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor='name'>Nombre</label>
      <input id='name' name='name' type="text" value={ values.name } onChange={ handleChange }></input>

      <label htmlFor='surname'>Apellido</label>
      <input id='surname' name='apellido' type="text" value={ values.apellido } onChange={ handleChange }></input>

      <label htmlFor='email'>Correo</label>
      <input id='email' name='email' type="email" value={ values.email } onChange={ handleChange }></input>

      <label htmlFor='email'>Núm de Personas</label>
      <input id='personas' name='personas' type="number" value={ values.personas } onChange={ handleChange }></input>

      

      <button className='button' type='submit'>Enviar</button>
    </form>

    
  )
}