import React from 'react';

const Navbar = ({ setCurrentPage }) => {
  const ModoOverviuw = () => {
    setCurrentPage('overviuw');
  };

  const ModoContent = () => {
    setCurrentPage('content');
  };

  const ModoCreate = () => {
    setCurrentPage('create');
  };

  return (
    <nav>
      <div className='row'>
        <div className='col'>
          <button onClick={ModoOverviuw} className='btn btn-block'>
            Overviuw
          </button>
        </div>
        <div className='col'>
          <button onClick={ModoContent} className='btn btn-block'>
            Content
          </button>
        </div>
        <div className='col'>
          <button onClick={ModoCreate} className='btn  btn-block '>
            Create
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

