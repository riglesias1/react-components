import React from 'react';
import './RoundedButton.css';

export const RoundedButton = ({ title, route, icon, color, expand }) => {
  expand ? (expand = '250px') : (expand = '60px');

  return (
    <div
      className="rounded-button-container"
      style={{
        '--rounded-button-clr': color,
        '--rounded-button-width': expand,
      }}
    >
      <a
        style={{ textDecoration: 'none', color: color }}
        href={route}
        target="_blank"
        rel="noreferrer"
        className="rounded-button"
      >
        <div className="rounded-button-icon">{icon}</div>
        <span>{title}</span>
      </a>
    </div>
  );
};

export default RoundedButton;
