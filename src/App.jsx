import React, { useState } from 'react';
import Navbar from './Componentes/Navbar';
import Overviuw from './Pages/Overviuw.Jsx';
import Content from './Pages/Content';
import Create from './Pages/Create';
import Footer from './Componentes/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('overviuw'); // Estado para controlar la página actual

  return (
    <>         
      <div className='Container mt-3 p-3'>
        <header>
          <Navbar setCurrentPage={setCurrentPage} /> {/* Pasa el estado como prop */}
        </header>
        {
          currentPage === 'overviuw' && <Overviuw />
        }
        {
          currentPage === 'content' && <Content />
        }
        {
          currentPage === 'create' && <Create />
        }
      </div>
        <Footer/>
    </>
    
  );
}

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Navbar from './Componentes/Navbar';
// import Overviuw from './Pages/Overviuw';
// import Content from './Pages/Content';
// import Create from './Pages/Create';
// import Footer from './Componentes/Footer';

// function App() {
//   return (
//     <Router>
//       <div className='Container mt-3 p-3'>
//         <header>
//           <Navbar />
//         </header>
//         <Switch>
//           <Route path="/content">
//             <Content />
//           </Route>
//           <Route path="/create">
//             <Create />
//           </Route>
//           <Route path="/">
//             <Overviuw />
//           </Route>
//         </Switch>
//       </div>
//       <Footer />
//     </Router>
//   );
// }

// export default App;
