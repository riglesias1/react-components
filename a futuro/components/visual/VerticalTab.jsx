import React from 'react';
import { Link } from 'gatsby';
import './VerticalTab.css';
import { FaAngleRight } from 'react-icons/fa';

export const VerticalTab = ({ list, color }) => {
  let styles = [];
  let verticalHeight = 60 * Object.keys(list).length + 3;
  const isBrowser = () => typeof window !== 'undefined';

  const verticalId =
    'onetab' + (Math.floor(Math.random() * 9999) + 1).toString();
  const firstVerticalId = verticalId + '1';

  setTimeout(function () {
    if (isBrowser() && document.getElementById(firstVerticalId)) {
      document.getElementById(firstVerticalId).checked = true;
    }
  }, 1000);

  const checkboxTabs = () => {
    let indents = [];
    let count = 1;

    list.map(() => {
      indents.push(
        <input type="radio" name="slider" id={verticalId + count.toString()} />
      );
      count++;
    });

    return indents;
  };

  const sideTabs = () => {
    let indents = [];
    let count = 1;

    list.map((tab) => {
      let an_id = verticalId + count.toString();
      indents.push(
        <label htmlFor={an_id} className={an_id}>
          <span className="icon-verticaltab">
            {tab.icon ? tab.icon : <FaAngleRight />}
          </span>
          <span className="title">{tab.name}</span>
        </label>
      );
      styles.push(
        `#` +
          an_id +
          `:checked ~ .list .slider {
            top:` +
          (count - 1) * 60 +
          `px;
        }`
      );
      styles.push(
        `#` +
          an_id +
          `:checked ~ .text-content-verticaltab .` +
          an_id +
          `{
            display: block;
        }`
      );
      styles.push(
        `#` +
          an_id +
          `:checked ~ .list label.` +
          an_id +
          `{
              color: var(--theme-ui-colors-text);
        }`
      );
      if (an_id !== firstVerticalId) {
        styles.push(
          `#` +
            an_id +
            `:checked ~ .text-content-verticaltab .` +
            firstVerticalId +
            `{
          display: none;
      }`
        );
      }
      styles.push(`.content-verticaltab .list label:hover {
        color: var(--vertical-color);
      }`);
      styles.push(
        `.content-verticaltab .text-content-verticaltab .` +
          firstVerticalId +
          `{
        display: block;
      }`
      );
      count++;
    });

    return indents;
  };

  const contentTabs = () => {
    let indents = [];
    let count = 1;

    list.map((tab) => {
      let an_id = verticalId + count.toString();
      indents.push(
        <div className={an_id + ' text'}>
          <div className="title">{tab.title}</div>
          <p>{tab.content}</p>
          {tab.textButton ? (
            tab.url.startsWith('/') ? (
              <Link className="cta" to={tab.url}>
                <span className="hover-underline-animation">
                  {tab.textButton}
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
              </Link>
            ) : (
              <a
                className="cta"
                href={tab.url}
                target="_blank"
                rel="noreferrer"
              >
                <span className="hover-underline-animation">
                  {tab.textButton}
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
            )
          ) : null}
        </div>
      );
      count++;
    });
    return indents;
  };

  return (
    <div
      className="container-verticaltab"
      style={{
        '--vertical-color': color,
        '--vertical-height': verticalHeight.toString() + 'px',
        '--vertical-invert-height':
          '-' + (verticalHeight * 3).toString() + 'px',
      }}
    >
      <style>{styles}</style>
      <div className="content-verticaltab">
        {checkboxTabs()}
        <div className="list">
          {sideTabs()}
          <div className="slider"></div>
        </div>
        <div className="text-content-verticaltab">{contentTabs()}</div>
      </div>
    </div>
  );
};

export default VerticalTab;
