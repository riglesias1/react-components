import React from 'react';
import './TableAsset.css';

export const TableAsset = ({ title, color, list }) => {
  const heightAsset = Object.keys(list).length * 25;

  const rgbToHex = (rgb) => {
    let rgbParts = rgb.split(',');
    return (
      '#' +
      [parseInt(rgbParts[0]), parseInt(rgbParts[1]), parseInt(rgbParts[2])]
        .map((x) => x.toString(16).padStart(2, '0'))
        .join('')
    );
  };

  const hexToRgb = (hex) => {
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;
    return r + ',' + g + ',' + b;
  };

  const colorType = (event) => {
    let textEvent = event.target.innerHTML;
    if (textEvent.startsWith('Color: #')) {
      textEvent = textEvent.split('#')[1];
      event.target.innerHTML = 'Color: RGB(' + hexToRgb(textEvent) + ')';
    } else {
      textEvent = textEvent.match(/\(([^)]+)\)/)[1];
      event.target.innerHTML = 'Color: ' + rgbToHex(textEvent).toUpperCase();
    }
  };

  const assetTable = (list) => {
    let indents = [];

    for (let asset in list) {
      const title = list[asset]['title'];
      const unicode = list[asset]['unicode'];
      const color = list[asset]['color'];
      const icon = list[asset]['icon'];

      indents.push(
        <tbody>
          <tr>
            <td width="70" rowSpan="6" valign="top" className="logo-indice">
              {icon}
            </td>
            <td className="title-indice" valign="top">
              <strong>
                <span>{title}</span>
              </strong>
            </td>
          </tr>
          <tr className="description-indice">
            <td valign="top">
              <span>Unicode: {unicode.toUpperCase()}</span>
              <br />
              <button onClick={(e) => colorType(e)} style={{ color: color }}>
                Color: {color}
              </button>
              <span className="tooltiptext">Ver otro formato</span>
            </td>
          </tr>
        </tbody>
      );
    }
    return indents;
  };

  return (
    <div className="indice-container">
      <details
        style={{ '--height-indice': heightAsset + 'px', '--indice-clr': color }}
      >
        <summary> {title} </summary>
        <table cellPadding="0" cellSpacing="0">
          {assetTable(list)}
        </table>
      </details>
    </div>
  );
};

export default TableAsset;
