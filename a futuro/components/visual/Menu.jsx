import React from 'react';
import { Link } from 'gatsby';
import './Menu.css';

export const Menu = ({ title, subtitle, color, icon, route, small }) => {
  const styledMenu = small
    ? {
        '--menu-clr': color,
        '--menu-width-box': '250px',
        '--menu-height-box': '60px',
        '--menu-width-icon': '30px',
        '--menu-font': '15px',
        '--menu-font-desc': '0.7em',
      }
    : {
        '--menu-clr': color,
        '--menu-width-box': '350px',
        '--menu-height-box': '80px',
        '--menu-width-icon': '50px',
        '--menu-font': '27px',
        '--menu-font-desc': '0.9em',
      };

  return (
    <Link
      style={{ textDecoration: 'none', color: 'var(--theme-ui-colors-text)' }}
      className="menu-link"
      to={route === '' ? false : route}
    >
      <div className="container-menu">
        <div className="box" style={styledMenu}>
          <div className="content">
            <div className="icon">
              <div> {icon} </div>
            </div>
            <div className="text">
              <h1>{title}</h1>
              <p>{subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Menu;
