import React from 'react'
import { EventCard } from './cards/EventsCard'


const items = [

    {
        id : 1,
        src : '/juani.png',
        cantante : 'Juani García',
        caption : 'Evento donde Juani interpretará música de tres grandes Divas de la canción: Ana Gabriel,Rocío Durcal y Selena.',
        lugar : ' Caliches Maya Santa Ana',
        fecha : '6 de Agosto'
    },

    {
        id : 2,
        src : '/gaby.jpeg',
        cantante : 'Gaby Campos',
        caption : 'Evento donde Gaby estará haciendo homenaje a Ana Gabriel',
        lugar : 'Caribú bar Santa Ana',
        fecha : '6 de Agosto'

    },
    
 
    
  

]

export const SectionThree = () => {
    return (
        <div className='section3-container' id='Eventos'>
            <h2 data-aos="fade-down" data-aos-duration='2000'>Revisa nuestros próximos eventos</h2>

            <div className="events-list">
            {
                items.map( i => (
                    <EventCard 
                         
                        key={i.id}
                        item={i}
                    />
                ))
            }
            </div>
            
        </div>
    )
}
