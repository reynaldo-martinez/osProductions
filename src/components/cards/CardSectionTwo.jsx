import React from 'react'

export const CardSectionTwo = ({info}) => {
    return (
     
            <div className="card-body">
                <div className="card-title">
                   <h2>{info.title}</h2>
                </div>

                <div className="card-info">
                    <p>
                        {info.info}
                    </p>    
                </div>
            </div>
    
    )
}
