import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import logo from '/Logo blanco.png';


const menuItems = [
    {
        id : 1,
        name : 'Nosotros'
    },
    {
        id : 2,
        name : 'Eventos'
    },
    {
        id : 3,
        name : 'Contáctanos'
    }
]
export const NavBar = () => {

    
    const handleToggle = ()=>{
        const menu = document.getElementById("menu")
        menu.classList.toggle("activarMenu")
        console.log(menu.classList);
    }

    return (
        <div className='header'>
            <div className="logo">
                <a href="/"><img src={logo} alt="logo" width='75px' height='75px' /></a>
                <button className='toggle' type='button' onClick={handleToggle}><MenuIcon/></button>
            </div>
            



            <div className="menu" id="menu">
                <ul>

                    {
                        menuItems.map( i => (
                            <a href={'#'+ i.name} onClick={handleToggle} key={i.id}>{i.name}</a>
                        ))
                    }
                    
                   
                   
                </ul>
            </div>
        </div>
    )
}
