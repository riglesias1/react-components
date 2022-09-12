import { React, useState } from 'react';
import './VSRemote.css';


export const VSRemote = ({ title, description, color, host, path, file }) => {
  const [username, setUsername] = useState('');

  if (!path.startsWith('/')) {
    path = '/' + path;
  } else if (path.endsWith('/')) {
    path = path.slice(0, -1);
  }

  if (file) {
    file += ':1';
  }

  const response = (
    <div className="vsremote-container" style={{ '--remote-clr': color }}>
      <table cellPadding="0" cellSpacing="0" className="ng-scope">
        <tbody>
          <tr>
            <td
              width="120"
              rowSpan="6"
              valign="top"
              className="ng-scope line-vsremote"
            ></td>
            <td className="title-vsremote" valign="top">
              <span className="ng-binding">{title}</span>
            </td>
          </tr>

          <tr className="description-vsremote">
            <td valign="top">
              <span className="ng-binding ng-scope">{description}</span>
            </td>
          </tr>

          <tr className="ng-scope">
            {/* <br />
            <input
              className="input-user-vsremote"
              type="text"
              value={username}
              placeholder="Ingrese su usuario."
              onChange={(e) => setUsername(e.target.value.toLowerCase())}
            /> */}
            <a
              className="cta-vsremote"
              href={
                'vscode://vscode-remote/ssh-remote+' +
                username +
                '@' +
                host +
                path +
                '/' +
                file
              }
            >
              <span className="hover-underline-animation-vsremote">
                Ingresar
              </span>
              <svg
                id="arrow-horizontal"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="10"
                viewBox="0 0 46 16"
              >
                <path
                  id="Path_10"
                  data-name="Path 10"
                  d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                  transform="translate(30)"
                ></path>
              </svg>
            </a>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return response;
};

export default VSRemote;
