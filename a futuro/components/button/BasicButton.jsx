import React from 'react';
import { Link } from 'gatsby';
import './BasicButton.css';

export const BasicButton = ({ title, route, color, external }) => {
  return external || route.toLowerCase().startsWith('http') ? (
    <a
      style={{ textDecoration: 'none', color: 'var(--theme-ui-colors-text)' }}
      href={route === '' ? undefined : route}
      target="_blank"
      rel="noreferrer"
    >
      <button className="button" style={{ '--button-clr': color }}>
        <span> {title} </span>
      </button>
    </a>
  ) : (
    <Link to={route === '' ? undefined : route}>
      <button className="button" style={{ '--button-clr': color }}>
        <span> {title} </span>
      </button>
    </Link>
  );
};

export default BasicButton;
