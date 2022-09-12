import React from 'react';
import './Slider.css';

export const Slider = ({ title, subtitle, route, icon, color }) => {
  return (
    <div className="container-slider" style={{ '--slider-clr': color }}>
      <div className="card-slider">
        <a href={route} target="_blank" rel="noreferrer">
          Descargar
        </a>
        <div className="content-slider">
          <div className="logo-slider">{icon}</div>
          <div className="text-slider">
            <span>{title}</span>
            <p>{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
