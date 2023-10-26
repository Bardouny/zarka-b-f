import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Offcanvas = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const navigateTo = useNavigate()
  const navigate = function (link) {
    navigateTo(link)
    toggleMenu()
  }
  return (
    <div>
      <button onClick={toggleMenu} className='btn btn-primary hide'>Toggle Menu</button>
      <div className={`offcanvas-menu ${isMenuOpen ? 'open' : ''}`}>
        <button onClick={toggleMenu} className='btn btn-danger mb-5'>Close Menu</button>
        <ul>
          <li onClick={() => navigate('/account/')}>Home</li>
          <li onClick={() => navigate('/account/wallet')} >wallet</li>
          <li onClick={() => navigate('/account/lastact')} >Last actions</li>
          <li onClick={() => navigate('/account/Sendmoney')}>Send money</li>
          <li onClick={() => navigate('/account/Settings')}>Settings</li>
          <button className='btn btn-danger mt-5'>Sign aut</button>
        </ul>
      </div>

    </div>
  );
};

export default Offcanvas;