import React from 'react';
import './Partners.css';
import Icon from '../../assets/partners/INFINIX.png';
const Partners = () => {
  const sponsors = [
    { name: 'Sponsor 1' },
    { name: 'Sponsor 2'},
    { name: 'Sponsor 3' },
    { name: 'Sponsor 4' },
    { name: 'Sponsor 5' },
    { name: 'Sponsor 6' },
    { name: 'Sponsor 7' },
    { name: 'Sponsor 8' },
  ];

  return (
    <section id="patrocinadores" className="patrocinadores-section">
      <p className='text-partners'> OUR PARTNERS</p>
      
      <div className="sponsors-scroll-container">
        
        <div className="sponsors-scroll">
          {[...sponsors, ...sponsors].map((sponsor, index) => (
            <div key={index} className="sponsor-item">
              <img loading="lazy" className='partner-image' src={Icon}  alt={sponsor.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
