import React from 'react';
import styles from './Filter.module.css';
import { connect } from 'react-redux';
import { phonebookSelectors, filterContscts } from '../../redux/phonebook';

const Filter = ({ onChange, value }) => (
  <label>
    Find contacts by name
    <input
      className={styles.filter__input}
      onChange={onChange}
      value={value}
      name="filter"
    />
  </label>
);

const mapStateToProps = state => {
  return {
    value: phonebookSelectors.getFilter(state),
  };
};

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    const value = e.target.value;
    return dispatch(filterContscts(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
