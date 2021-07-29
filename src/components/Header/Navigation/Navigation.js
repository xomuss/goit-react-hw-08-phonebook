import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import routs from '../../../routs';
import { authSelectors } from '../../../redux/auth';
import styles from './Navigation.module.css';

const Navigation = ({ isAuthenticated }) => {
  return (
    <ul className={styles.list}>
      <li>
        <NavLink to={routs.home}>Home</NavLink>
      </li>
      {isAuthenticated && (
        <li>
          <NavLink to={routs.contacts}>Contacts</NavLink>
        </li>
      )}
    </ul>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
