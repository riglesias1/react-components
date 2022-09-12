import React from 'react';
import './Frame.css';
import { AiOutlineHome } from 'react-icons/ai';
import { BsFillCircleFill } from 'react-icons/bs';

export const Frame = ({ url, title, width, height, background, scroll, customStyle }) => {
  const theFrame = () => {
    return (
      <iframe
        width={width}
        height={height}
        src={url}
        title={title}
        scrolling={scroll ? 'yes' : 'no'}
        style={customStyle}
        frameBorder="0"
        loading="lazy"
        sandbox="allow-same-origin allow-scripts allow-top-navigation"
        referrerPolicy="no-referrer"
        seamless
      ></iframe>
    );
  };

  return (
    <div className="container-frame" style={{ '--frame-bgd': background }}>
      <div id="browser-frame">
        <BsFillCircleFill />
        <BsFillCircleFill />
        <BsFillCircleFill />
        <ul className="tabs">
          <li className="active">
            <span>{title}</span>
            <a className="close" href="#">
              ×
            </a>
          </li>
        </ul>

        <div className="bar-frame">
          <AiOutlineHome />
          <input
            placeholder="Search"
            value="http://myhomepage/herramientas"
            type="text"
          />
        </div>

        <div className="page-frame">{theFrame()}</div>
      </div>
    </div>
  );
};

export default Frame;
