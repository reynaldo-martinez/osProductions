import React from 'react'
import CloseIcon from '@material-ui/icons/Close';

export const EventModal = ({isOpen, setIsOpen, item}) => {

    const handleCloseModal =()=>{
        setIsOpen(false)
    }
    return (

        <div>
            {
                isOpen ?
                    <div className='modal-container'>
                        <div className="modal animate__animated animate__fadeInDown">
                            <div className="header-modal">
                               <button onClick={handleCloseModal}> <CloseIcon /></button>
                            </div>


                            <div className="img-container">
                                <img src={item.src} alt="" />
                            </div>

                            <div className="modal-body">
                                <div className="info">
                                    <h4>Cantante: {item.cantante}</h4>
                                    <h5>Lugar: {item.lugar}</h5>
                                    <h5>Fecha: {item.fecha}</h5>
                                </div>
                                <p>{item.caption}</p>
                            </div>
                        </div>
                    </div>
                    :
                    null
            }
        </div>

    )
}
