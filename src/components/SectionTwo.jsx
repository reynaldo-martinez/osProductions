import React from 'react'
import { CardSectionTwo } from './cards/CardSectionTwo'


const info = [

    {
        title : 'Lo que somos',
        info : 'OS Production es una empresa que nace en el año 2018 con un objetivo social, apoyar a jóvenes que tienen el talento de cantar y que necesitaban recursos económicos para poder finalizar sus estudios, artistas que no tenían quien les gestionará espacios para dar a conocer su talento artístico ante el público general.'
    },

    {
        title : 'Lo que hacemos',
        info : 'A este objetivo se le agrega el de descubrir y promover jóvenes con talento musical, que requieren ser promovidos para crecer como artistas.'

    },

    {
        title : 'Lo que ofrecemos',
        info : 'En el transcurso del tiempo Os production se ha ido posicionando en el gusto del público, por la calidad de producciones artísticas en los diferentes escenarios(Restaurantes y bares locales y nacionales) y (la gran sala del majestuoso teatro Nacional de Santa Ana),con talento joven  que se ha ido promoviendo poco, posicionándose en el corazón del publico '
    }

]

export const SectionTwo = () => {
    return (
        <div className='section-container' id='Nosotros'
        >
            {
                info.map(info => (
                    <CardSectionTwo
                    
                     key={info.title}
                     info={info} 
                     />
                ))
            }
        </div>
    )
}
