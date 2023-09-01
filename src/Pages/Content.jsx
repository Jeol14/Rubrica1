import React, { useState } from 'react';
import Create from './Create'; // Asegúrate de importar el componente Create


const Content = () => {
  const [selectedCategory, setSelectedCategory] = useState(''); // Estado para la categoría seleccionada        
  const [sportsData, setSportsData] = useState([  
    {
      id: 1,
      title: 'Fútbol',
      description: 'El futbol es un deporte de equipo jugado entre dos conjuntos de once jugadores cada uno, mientras los árbitros se ocupan de que las normas se cumplan correctamente. Es, ampliamente, considerado el deporte más popular del mundo, pues lo practican unas 270 millones de personas.',
      category: 'Deportes por equipo',
      team: 'Equipos de Fútbol',
      image: 'https://media.istockphoto.com/id/1428702537/photo/soccer-girl.jpg?b=1&s=170667a&w=0&k=20&c=PjxlPaV44vMBudiXNfoJTddOMEljwLIbtkVN7vQkslI=',
      teamLink: 'https://es.wikipedia.org/wiki/Categor%C3%ADa:Equipos_de_f%C3%BAtbol_por_pa%C3%ADs',
    },
    {
      id: 2,
      title: 'Baloncesto',
      description: 'Es un deporte de equipo, jugado entre dos conjuntos de cinco jugadores cada uno en cuatro períodos de cuartos de diez minutos cada uno hasta doce minutos cada cuarto en la NBA. El objetivo del equipo es anotar puntos introduciendo un balón por la canasta, un aro a 3,05 metros sobre la superficie de la pista de juego del que cuelga una red.',
      category: 'Deportes por equipo',
      team: 'Equipos de Baloncesto',
      image: 'https://media.istockphoto.com/id/1289707576/photo/basketball-players-chasing-for-ball.jpg?b=1&s=170667a&w=0&k=20&c=nrQ34LvQ4QA617xLc34deRetp4tsou987I6sVHsn6Og=',
      teamLink: 'https://es.wikipedia.org/wiki/Categor%C3%ADa:Equipos_de_baloncesto',
    },
    {
      id: 3,
      title: 'Tenis',
      description: 'Es un deporte que se disputa entre dos jugadores (individuales) o entre dos parejas (dobles). El objetivo principal del juego es lanzar una pelota golpeándola con la raqueta de modo que rebote en el otro lado pasando la red dentro de los límites permitidos del campo del rival, procurando que este no pueda devolverla para conseguir un segundo rebote en el suelo y darle un punto.',
      category: 'Deportes por equipo',
      team: 'Equipos de Tenis',
      image: 'https://media.istockphoto.com/id/869105878/photo/professional-tennis-player-on-court.jpg?b=1&s=170667a&w=0&k=20&c=2QKciGxr0bUAi8_KYgawgdL1NDPrXJ6hhSwANDDFhzE=',
      teamLink: 'https://www.espn.com.co/tenis/posiciones',
    },
    {
      id: 4,
      title: 'MotoGP',
      description: 'MotoGP es la máxima categoría del Campeonato Mundial de Motociclismo, considerado el certamen internacional más importante en el ámbito de motociclismo de velocidad. Su organización viene determinada por la Federación Internacional de Motociclismo (FIM), al igual que ocurre con las otras categorías del campeonato (Moto2 y Moto3).',
      category: 'Deportes de motor',
      team: 'Equipos de MotoGP',
      image: 'https://media.istockphoto.com/id/458126037/es/foto/muy-r%C3%A1pido-superbike.jpg?s=612x612&w=0&k=20&c=CkIdx15YlPjvrEzoyxDnV-l4WoMQa4hLPZjaZgGHLo0=',
      teamLink: 'https://www.mundodeportivo.com/resultados/motor/motogp/equipos',
    },
    {
      id: 5,
      title: 'Fórmula 1',
      description: 'El campeonato mundial de Formula 1 de la FIA, conocido como Fórmula Uno, es la principal competición de automovilismo internacional y el campeonato de deportes de motor más popular y prestigioso del mundo. La entidad que la dirige es la Federación Internacional del Automóvil (FIA). Desde septiembre del 2016, tras la adquisición de Formula One Group, la empresa estadounidense Liberty Media es la responsable de gestionar y operar el campeonato.',
      category: 'Deportes de motor',
      team: 'Equipos de Fórmula 1',
      image: 'https://media.istockphoto.com/id/166272752/es/foto/pista-de-carreras-de-coches.jpg?s=612x612&w=0&k=20&c=Ah8PHvJNrg3fEqxNLcXaKOCgy2lPy423DXmduazwk9k=',
      teamLink: 'https://www.f1aldia.com/escuderias/',
    },
    {
      id: 6,
      title: 'Rally',
      description: 'Un Rally es una competición automovilística que se disputa en carreteras abiertas al tráfico pero que se cierran especialmente para su celebración. A la parte cerrada al tránsito rodado se le denomina «tramo», que es el lugar donde cada participante compite y que debe completar en el menor tiempo posible. El ganador es aquel que, con la suma de los tiempos de todos los tramos, haya empleado menos para completar la carrera.',
      category: 'Deportes de motor',
      team: 'Equipos de Rally',
      image: 'https://media.istockphoto.com/id/497641930/es/foto/mitsubishi-lancer-evo-x-compite-en-la-anual-rally-de-galicia.jpg?s=612x612&w=0&k=20&c=khmpdbQs1armC9Btkg2z-lvuqtstrPN4fOYzgkkQ-YA=',
      teamLink: 'https://es.wikipedia.org/wiki/Categor%C3%ADa:Equipos_de_rally',
    },
    {
      id: 7,
      title: 'Tenis de Mesa',
      description: 'El tenis de mesa (también conocido como ping-pong o pimpón) es un deporte de raqueta que se disputa entre dos jugadores o dos parejas (dobles). Es un deporte olímpico desde Seúl 1988, y el deporte con mayor número de practicantes, con 40 millones de jugadores compitiendo en todo el mundo. Según un estudio realizado por la NASA, es el deporte más complicado que un ser humano puede practicar a nivel profesional.',
      category: 'Deportes de mesa',
      team: 'Equipos de Tenis de Mesa',
      image: 'https://media.istockphoto.com/id/1425158165/es/foto/ping-pong-de-ping-pong-de-mesa-y-pelota-blanca-sobre-tabla-azul.jpg?s=612x612&w=0&k=20&c=1U_oCZM85tf2GDwAxcrqcoSMenDsuvHvWVo88zkAMFs=',
      teamLink: 'https://es.wikipedia.org/wiki/Campeonato_Mundial_por_equipos_de_Tenis_de_Mesa',
    },
    {
      id: 8,
      title: 'Billar',
      description: 'El billar es un deporte de precisión que se practica impulsando con un taco un número variable de bolas (antiguamente de marfil), en una mesa con tablero de pizarra forrada de paño, bordeada con bandas de material elástico y con troneras o sin ellas. Tuvo la carta olímpica para los Juegos Olímpicos de 2004. Existen muy diferentes variantes:',
      category: 'Deportes de mesa',
      team: 'Equipos de Billar',
      image: 'https://media.istockphoto.com/id/149409557/es/foto/composici%C3%B3n-de-billar.jpg?s=612x612&w=0&k=20&c=YZYHIpsiGy2gOAIPQUEst837EmAuDmAcd0YCIniwBGQ=',
      teamLink: 'https://www.kozoom.com/es/billar-carambola/results/6515/rankings.html',
    },
    {
      id: 9,
      title: 'Ajedrez',
      description: 'El ajedrez es un juego de tablero entre dos contrincantes en el que cada uno dispone al inicio de dieciséis piezas móviles que se colocan sobre un tablero dividido en sesenta y cuatro casillas o escaques. En su versión de competición, está considerado como un deporte, aunque en la actualidad tiene claramente una dimensión social, educativa y terapéutica.',
      category: 'Deportes de mesa',
      team: 'Equipos de Ajedrez',
      image: 'https://media.istockphoto.com/id/1128789429/es/foto/plan-de-estrategia-principal-del-concepto-de-negocio-exitoso-concurso-l%C3%ADder-pe%C3%B3n-de-mano-del.jpg?s=612x612&w=0&k=20&c=8nWMwcJ-DZIIvQ13gBbr6tj5y5CLUOUvySwuJf8Llo0=',
      teamLink: 'https://es.chessbase.com/post/campeonato-del-mundo-de-ajedrez-rapido-por-equipos-2023-jornada3',
    },
  ]);
  
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const addSportCard = (newCard) => {
    setSportsData([...sportsData, newCard]);
  };

  const filteredSports = selectedCategory
    ? sportsData.filter((sport) => sport.category === selectedCategory)
    : sportsData;

  return (
    
    <div className="content">      
      <div className="filter">
        <label>Filtrar por categoría:</label>
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="filter-select"
        >
          <option value="">Todas</option>
          <option value='Futbol'>Fútbol</option>
          <option value='Baloncesto'>Baloncesto</option>
          <option value='Tenis'>Tenis</option>
          <option value='Atletismo'>Atletismo</option>
          <option value='Natacion'>Natación</option>
          <option value='Ciclismo'>Ciclismo</option>
          <option value='Golf'>Golf</option>            
          <option value='Voleibol'>Voleibol</option>
          <option value='Hockey'>Hockey</option>
          <option value="Deportes de motor">Deportes de motor</option>
          <option value="Deportes de mesa">Deportes de mesa</option>
          <option value="Deportes por equipo">Deportes por equipo</option>
        </select>
      </div>
      {/* Renderiza las tarjetas de deportes */}
      {filteredSports.map((sport) => (
        <div key={sport.id} className="card">
          {/* Contenido de la tarjeta de deporte */}
          <img src={sport.image} alt={sport.title} />
          <h2>{sport.title}</h2>
          <p>{sport.description}</p>
          <p>Categoría: {sport.category}</p>
          <p>Equipo: <a>{sport.team}</a></p>
          <p>Link: <a href={sport.teamLink}>Link del equipo</a></p>

        </div>
      ))}

      {/* Renderiza el componente Create y pasa la función addSportCard como prop */}
      <Create addCard={addSportCard} />
    </div>
  );


};

export default Content;
