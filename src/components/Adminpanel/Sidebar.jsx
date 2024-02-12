import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <ul>
        <a href='/home'><li >HOME</li></a>
       </ul>
        INSERT DATA
       <ul>
       <a href='/c'><li>Bus details</li></a>
        <a href='/s'><li>Route Details</li></a>
        
       </ul>
       VIEW DATA
       <ul>
       <a href="/viewdetails"><li>View Bus-Details</li></a>
       <a href="/sview"><li>View Routes</li></a>
       
      
      </ul>
      
    </div>
  );
};

export default Sidebar;