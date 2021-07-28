import React from 'react';
import { connect } from 'react-redux';
import styles from './Header.module.css';
import Navigation from './Navigation';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import { authSelectors } from '../../redux/auth';

const Header = ({ isAuthenticated }) => {
  return (
    <header className={styles.list}>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Header);
