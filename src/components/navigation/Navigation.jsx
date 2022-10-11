/* eslint-disable no-console */
import React, { useState } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { makeValidTitle } from '../../functions';

export const Navigation = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState(undefined);

  return (
    <nav className="navigation">
      {categories.map(category => {
        return (
          <div
            className="navigation__category"
            key={Math.round()}
          >
            <NavLink
              style={{ textDecoration: 'none' }}
              to={`${category}/${JSON.parse(`${localStorage.getItem(`${category}SelectedPage`)}`) || 1}`}
              onClick={() => {
                setActiveCategory(category);
              }}
            >
              <p
                className={classNames('navigation__categoryTitle', { 'navigation__categoryTitle--active': activeCategory === category })}
              >
                {makeValidTitle(category)}
              </p>
            </NavLink>
          </div>
        );
      })}
    </nav>
  );
};
