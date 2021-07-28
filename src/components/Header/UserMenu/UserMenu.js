import React from 'react';
import { connect } from 'react-redux';
import { authSelectors } from '../../../redux/auth';
import { logOut } from '../../../redux/auth/auth-operations';
import styles from './UserMenu.module.css';
import defaultAvatar from '../../../icon/ava.jpg';

const UserMenue = ({ avatar, name, onLogout }) => {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={avatar} alt="" width="32" />
      <span className={styles.name}>Welcome, {name}</span>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenue);
