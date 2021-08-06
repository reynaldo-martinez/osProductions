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
                                    <h5>Hora: {item.hora}</h5>
                                </div>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio corrupti nulla eius deserunt maxime omnis quam illo. Aperiam facere voluptatem explicabo in exercitationem. Unde doloremque exercitationem blanditiis temporibus in vitae.</p>
                            </div>
                        </div>
                    </div>
                    :
                    null
            }
        </div>

    )
}
