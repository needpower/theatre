import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'redux-first-router-link';
import classes from 'classnames';
import navigationConfig from './config';
import st from './style.module.scss';

export default function Navigation({ opened }) {
  const className = classes(st.overlay, {
    [st.opened]: opened,
  });
  return (
    <div className={className}>
      <nav className={st.nav}>
        <ul>
          {navigationConfig.map(link => (
            <li key={link.path.type}>
              <NavLink to={link.path}>{link.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

Navigation.propTypes = {
  opened: PropTypes.bool,
};

Navigation.defaultProps = {
  opened: false,
};