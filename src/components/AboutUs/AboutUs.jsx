import React from 'react';

import './AboutUs.css';

function AboutUs(){
  return(
    <div  className="about">
      <section>
        <h1 >
          Sobre a gente
        </h1>
        <p>
          Somos um restaurante brasileiro que temos o compromisso com nossos clientes de oferecer a melhor experiência
        </p>
      </section>
      <img 
        src="src\assets\Lethimcook.jpeg" 
        alt=""
        className="about-img"
      />
    </div>
  );
}

export default AboutUs;
