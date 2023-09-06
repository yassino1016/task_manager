import React from 'react';
import {FaClock,FaTasks,FaTable,FaCode,FaFile,FaPlusCircle,FaCog,FaChevronCircleRight} from 'react-icons/fa';
function Sidebar({setDisplayedContent}) {
  const showChronologTable = () => {
    setDisplayedContent('chronolog');
  };

  const showTableauxTable = () => {
    setDisplayedContent('tableaux');
  };
  const showBacklogTable = () => {
    setDisplayedContent('Backlog');
  };

  
  return (
    <aside>
        <div>
            <p>Vous utilisez l'offre Free</p>
            <div>METTRE À NIVEAU</div>


            <hr />

            
        </div>
    <div className='aside-content'>
      <details>
      <summary>PLANIFICATION</summary>
        <div onClick={showChronologTable}><span><FaClock /> Chronolog</span></div>
        <div onClick={showBacklogTable}><span><FaTasks /> Backlog</span></div>
        <div onClick={showTableauxTable}><span><FaTable /> Tableaux</span></div>
      </details>

      <details>
        <summary>DÉVELOPPEMENT</summary>
        <div ><span><FaCode /> Code</span></div>
      </details>

      <hr />

      <div className='liste'>
        <div ><span><FaFile /> Page de projets</span></div>
        <div ><span><FaPlusCircle /> Ajouter un raccourci</span></div>
        <div ><span><FaCog /> Paramètres du projet</span></div>
      </div>
    </div>
  
    <nav>
      <p>Vous faites partie d'un projet géré par l'équipe <br />
        <a href="">En savoir plus</a>
      </p>
    </nav>
    <FaChevronCircleRight  className="chevron-icon"/>
  </aside>
  
  );
}

export default Sidebar;
