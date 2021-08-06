import React from 'react'
import TextField from '@material-ui/core/TextField';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { useForm } from '../hooks/useForm';

export const SectionFour = () => {

    const initialForm = {
        nombre: '',
        correo: '',
        mensaje: ''
    };
    
    const [ formValues, handleInputChange, reset ] = useForm( initialForm );
    const {nombre, correo, mensaje } = formValues;

    const handleSubmit = (e)=>{
        e.preventDefault()

        const hidden = document.querySelector('.hidden')
        hidden.setAttribute('href', `mailto:reynaldovalle222@gmail.com?subject=${nombre}${correo}&body=${mensaje}`)
        console.log(hidden);
        hidden.click()
        reset()
    }
    return (
        <div className='section4-container' id='Contáctanos'>
            <div className="form-contact" >
            <h3>¿Necisitas elenco o eres artista? Contáctanos</h3>

                <form onSubmit={handleSubmit} data-aos="flip-left" data-aos-duration='3000'>

                    <div>
                        <TextField
                            name='nombre'
                            label="Nombre completo"
                            fullWidth
                            value={nombre}
                            onChange={handleInputChange}
                            required
                            variant='outlined'
                        />
                    </div>


                    <div>
                        <TextField
                            name='correo'
                            label="Correo"
                            type='email'
                            fullWidth
                            value={correo}
                            onChange={handleInputChange}
                            required
                            variant='outlined'
                        />
                    </div>


                    <div>
                        <TextField
                            name='mensaje'
                            label="Mensaje"
                            multiline
                            rows={5}
                            fullWidth
                            value={mensaje}
                            onChange={handleInputChange}
                            required
                            variant='outlined'
                        />

                    </div>


                    <div className='btn-container'>
                        <button type='submit'>Enviar</button>

                    </div>
                </form>
                <a href="mailto:" className='hidden'>mail</a>

            </div>

            <div className="redes">
                <div className="red">
                    <a href="https://www.facebook.com/orgullosantaneco10"  target='blank'><FacebookIcon fontSize='large' color='primary'/></a>
                </div>

                <div className="red">
                    <a href="https://www.instagram.com/santanecosv/"  target='blank'><InstagramIcon fontSize='large' style={{ color : '#e91e63' }} /></a>
                </div>

                

            </div>
        </div>
    )
}
