import React from 'react';
import getMedia from '../context/ExternalLink';
import './Video.css';

export const Video = ({ local, drive }) => {
  let response = '';

  if (local) {
    if (local.startsWith('/static/') || local.startsWith('data:')) {
      response = local;
    } else if (process.env.EXTERNAL_MEDIA) {
      response = getMedia(local);
    } else {
      try {
        response = require('/app/src/multimedia' + local);
      } catch {
        response = '';
      }
    }
  } else {
    response =
      'https://drive.google.com/uc?export=download&id=' + drive + '&confirm=t';
  }

  return (
    <div className="video-container">
      <video controls>
        <source src={response} type="video/mp4"></source>
        El navegador no soporta video.
      </video>
    </div>
  );
};

export default Video;
