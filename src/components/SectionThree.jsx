import React from 'react'
import { EventCard } from './cards/EventsCard'


const items = [

    {
        id : 1,
        src : '../../public/Miercoles 4 de Agosto.png',
        name : 'Gabriela Moran',
        caption : 'Evento donde Gaby estará haciendo homenaje a Ana Gabriel'
    },

    {
        id : 2,
        src : '../../public/Caliche´s Plaza Maya,6 de agosto.png',
        name : 'Gabriela Moran',
        caption : 'Evento donde Gaby estará haciendo homenaje a Ana Gabriel'

    },
    {
        id : 3,
        src : '../../public/Miercoles 4 de Agosto.png',
        name : 'Gabriela Moran',
        caption : 'Evento donde Gaby estará haciendo homenaje a Ana Gabriel'
    },
    {
        id : 4,
        src : '../../public/Miercoles 4 de Agosto.png',
        name : 'Gabriela Moran',
        caption : 'Evento donde Gaby estará haciendo homenaje a Ana Gabriel'
    },
 
    
  

]

export const SectionThree = () => {
    return (
        <div className='section3-container' id='Eventos'>
            {
                items.map( i => (
                    <EventCard 
                        key={i.id}
                        item={i}
                    />
                ))
            }
        </div>
    )
}
