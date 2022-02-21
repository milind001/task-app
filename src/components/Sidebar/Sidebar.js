

import React from "react";
import { Link } from 'react-router-dom';
import './sidebar.scss';

const Sidebar = ({itemList}) => {
    return (
        <div className="sidebar">
          {itemList.map(({name, link, icon}, index) => (
            <Link to={link} key={name} style={{textDecoration: 'none'}}>
              <div className="menu-item">
                <div className="menu">
                  <img src={icon} alt=""/>
                  <p>{name}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
    );
};

export default Sidebar;