import React from 'react';
import './_Navigation.scss';

function Navigation ({listMenu})
{
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          {listMenu.map((el, i) => (
            <li className="navigation__item" key={i}>
              <a href="" className="navigation__link">
                <span>0{i + 1}</span>
                {el}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
