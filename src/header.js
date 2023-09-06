import React from 'react';
import tmsvg from './tmsvg.svg'; 
import {FaBell,FaQuestionCircle, FaCog ,FaUser, FaSearch,} from 'react-icons/fa';
const Header = () => {
  return (
    <div className="custom-header">
      <div className="logo-and-menu">
        <img src={tmsvg} alt="Your Logo Alt Text" />
        <span className='titel'>Task managers</span>
        <div className="menu">
          <button>Votre travail </button>
          <button>Projets </button>
          <button>Filtres</button>
          <button>Tableaux de bord</button>
          <button>Équipes</button>
          <button>Appli</button>
          <button>Crée</button>
        </div>
      </div>
      <div className="search-and-icons">
        <div className="search-container">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search..." className="search-input" />
        </div>
        <div className="icons">
          <span className="icon"><FaBell /></span>
          <span className="icon"><FaQuestionCircle/></span>
          <span className="icon"><FaCog/> </span>
          <span className="icon"><FaUser/></span>
        </div>
      </div>
    </div>
  );
};

export default Header;

