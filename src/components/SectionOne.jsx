import React from 'react'
import cover from '/concert-3387324_1920.jpg';

const sectionStyle = {
    backgroundImage: `url(${cover})`,
  };

  

export const SectionOne = () => {
    return (
        <div className='section1-container parallax' style={sectionStyle}>
            <div className="content">
              <div className="text" data-aos="fade-up" data-aos-duration="3000">
                  <h2>LA <span>MÚSICA</span> ES LA POESÍA DEL AIRE</h2>
                  <p>Somos una organización dedicada a promover el talento Santaneco en las diferentes areas de arte y cultura.</p>
              </div>

            </div>
        </div>
    )
}
