import React from 'react';
import Card from '../Componentes/cardsOverview';

const cardsData = [
  {id: '0',imagenSrc:'https://s.france24.com/media/display/6aca8d1a-7783-11ea-9cf2-005056bf87d6/w:1280/p:4x3/WEB%2005ABR%20DEPORTES%20PORTADA%20FOTO.jpg', titulo: '¿Qué es el deporte?', contenido: ' Actividad o ejercicio físico, sujeto a determinadas normas, en que se hace prueba, con o sin competición, de habilidad, destreza o fuerza física.' },
  {id: '1',imagenSrc:'https://www.euroresidentes.com/entretenimiento/ocio-y-tiempo-libre/wp-content/uploads/sites/22/2014/09/1-7.jpg',titulo: 'Juegos Olimpicos', contenido:  'Es un evento multideportivo internacional organizado cada cuatro años bajo la supervisión del Comité Olímpico.Reúne  deportistas en múltiples especialidades' },
  {id: '2',imagenSrc:'https://e00-especiales-marca.uecdn.es/mundial/images/palmares-campeon2.jpg' ,titulo: 'Mundial de Futbol', contenido: 'En la Copa Mundial Masculina de la FIFA™, que se celebra cada cuatro años, 32 naciones compiten entre sí por el título. que congrega a los aficionados y a las mejores selecciones en torno a la pasión y el amor por el deporte rey.' },
  {id: '3', imagenSrc: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e6849a35-08d9-4bf0-9ae0-a04fbe4c2eee/df027qo-1be8c0b4-b0f6-49b0-917a-e6e6bb3224c6.png/v1/fill/w_1280,h_1010/super_bowl_lviii_concept_logo_by_flexsportsnet_df027qo-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAxMCIsInBhdGgiOiJcL2ZcL2U2ODQ5YTM1LTA4ZDktNGJmMC05YWUwLWEwNGZiZTRjMmVlZVwvZGYwMjdxby0xYmU4YzBiNC1iMGY2LTQ5YjAtOTE3YS1lNmU2YmIzMjI0YzYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Ey-T7OUP-klsXKt8ZZEoLLDCaKJuKfNTfVxfoOvXQXg',titulo: 'Super Bowll', contenido: 'Principal campeonato profesional de fútbol americano, en el que se enfrentan los campeones de la Conferencia Nacional y de la Conferencia Americana.' }
];


const Overview = () => {
 
  return (
    <div>
      <div className='container'>
        <h1 className='text-center mt-3 text-muted h1'>Los Deportes</h1>
      </div>
      <div className="d-flex flex-row flex-wrap mt-5"> {/* Diseño responsivo */}
      {cardsData.map((card) => (
  <div key={card.id} className="col-sm-6 col-md-4 col-lg-3 mb-3">
    <Card
      id={card.id} // pasar el id a la tarjeta
      titulo={card.titulo}
      contenido={card.contenido}
      imagenSrc={card.imagenSrc}
    />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Overview; 



