import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-2">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {/* Contenido de la primera sección */}
            <h4>Desarrollado por:</h4>
            <p>Alexandra Peña</p>
            <p>Juan Olmos</p>
          </div>
          <div className="col-md-4">
            {/* Contenido de la segunda sección */}
            <h4>Redes</h4>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/024/273/818/small/whatsapp-logo-free-png.png" alt="" className="img-fluid" style={{ maxWidth: '90px', marginRight: '10px' }} />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="" className="img-fluid" style={{ maxWidth: '50px', marginRight: '20px' }} />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png" alt="" className="img-fluid" style={{ maxWidth: '50px' }} />
          </div>
          <div className="col-md-4 justify">
            {/* Contenido de la tercera sección */}
            <h4>Objetivo de la Aplicación:</h4>
            <p>El proyecto tiene como objetivo principal desarrollar una plataforma de 
                exploración de contenido en línea utilizando la potencia de React, con un enfoque 
                clave en la presentación de información de manera intuitiva y la interacción del usuario 
                con esta información.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
