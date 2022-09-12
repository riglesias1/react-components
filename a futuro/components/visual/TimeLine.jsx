import React from 'react';
import { Link } from 'gatsby';
import './TimeLine.css';
// import { jsx, ThemeProvider } from 'theme-ui';

const CARD = 209;

export const TimeLine = ({ json }) => {
  const zeroPad = (num, places) => String(num).padStart(places, '0');
  let height_card =
    Object.keys(json).length <= 5
      ? Object.keys(json).length * CARD + 140
      : Object.keys(json).length >= 20
      ? Object.keys(json).length * CARD - 170
      : Object.keys(json).length * CARD;

  const cardBoard = () => {
    let indents = [];
    let unit_number = 1;

    for (let key in json) {
      let order = unit_number % 2 === 0 ? 6 : 5;

      unit_number = zeroPad(unit_number, 2);
      const title = json[key]['title'];
      const color = json[key]['color'];
      const topics = json[key]['topics'];

      indents.push(
        <div
          className="card card--step"
          style={{ '--unity-clr': color, order: order }}
        >
          <div className="head">
            <div className="number-box">
              <span>{unit_number}</span>
            </div>
            <h1>
              <span className="small">Unidad</span> {title}
            </h1>
          </div>
          {/* <ThemeProvider>
        <a
          sx={{
            color: 'primary',
            fontFamily: 'heading',
          }}
        >
          Hello
        </a>
      </ThemeProvider> */}
          <div className="body">
            {topics.map((aTopic) => (
              <p>
                <Link className="urltopic" to={aTopic['url']}>
                  {aTopic['name']}
                </Link>
              </p>
            ))}
          </div>
        </div>
      );
      unit_number++;
    }
    return indents;
  };

  return (
    <div
      className="card-wrapper"
      style={{ '--unity-height-card': height_card + 'px' }}
    >
      {cardBoard()}
    </div>
  );
};

export default TimeLine;
