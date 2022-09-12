import React from 'react';
import getMedia from '../context/ExternalLink';
import './ImageIcon.css';

export const ImageIcon = ({ img, size, border }) => {
  let response = '';

  if (img.startsWith('/static/') || img.startsWith('data:')) {
    response = img;
  } else if (process.env.EXTERNAL_MEDIA) {
    response = getMedia(img);
  } else {
    try {
      response = require('/app/src/multimedia' + img);
    } catch {
      response = '';
    }
  }

  return (
    <img
      className={border ? 'image shadow-image' : 'image'}
      style={{ '--size': size }}
      alt={img}
      src={response}
    />
  );
};

export default ImageIcon;
