import React from 'react';
import { Playground } from 'docz';
import './Title.css';

export const Title = ({ title, subtitle, color, center }) => {

    return (
      <div className={center ? 'title alt-title' : 'title'} style={{ '--title-clr': color }}>
        <h1>
          {title}
          <span>{subtitle}</span>
        </h1>
        <div style={{ display: 'none' }}> <Playground /> </div>
      </div>
    );
};

export default Title;
