import React from 'react';
import './Extension.css';

export const Extension = ({ title, description, author, logo, link }) => {
  const response = (
    <div className="extension-container">
      <table cellPadding="0" cellSpacing="0" className="ng-scope">
        <tbody>
          <tr>
            <td
              width="120"
              rowSpan="6"
              valign="top"
              className="ng-scope logo-extension"
            >
              {logo.length > 0 && (
                <img border="0" alt="Logo" width="100" src={logo} />
              )}
            </td>
            <td className="title-extension" valign="top">
              <strong>
                <span className="ng-binding">{title}</span>
              </strong>
            </td>
          </tr>

          <tr className="ng-scope author-extension">
            <td valign="top">
              <strong className="ng-binding">{author}</strong>
            </td>
          </tr>

          <tr className="description-extension">
            <td valign="top">
              <span className="ng-binding ng-scope">{description}</span>
            </td>
          </tr>

          <tr className="ng-scope">
            <a
              className="cta"
              target="_blank"
              rel="noreferrer"
              href={'vscode:extension/' + link}
            >
              <span className="hover-underline-animation"> Descargar </span>
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

export default Extension;
