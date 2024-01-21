import React from 'react';

import './AboutUs.css';

function AboutUs(){
  return(
    <div  className="about">
      <section>
        <h1 >
          Sobre a gente:
        </h1>
        <p>
        Somos um restaurante brasileiro comprometido em proporcionar a melhor experiência aos nossos clientes. A origem de nosso restaurante está no desejo do nosso chef, Chico, de compartilhar os pratos típicos de sua família não apenas pelo Brasil, mas também pelo mundo. Valorizamos a tradição, o serviço dedicado e o ambiente acolhedor que fazem do nosso restaurante um destino especial para apreciadores da verdadeira culinária brasileira
        </p>
      </section>
      <img 
        className="about-img"
        src="src\assets\Lethimcook.jpeg" 
        alt=""
      />
    </div>
  );
}

export default AboutUs;
