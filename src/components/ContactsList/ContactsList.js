import React from 'react';
import { connect } from 'react-redux';
import styles from './ContactList.module.css';
import { phonebookOperations, phonebookSelectors } from '../../redux/phonebook';
const ContactsList = ({ contactsData, onDeleteContact }) => (
  <ul className={styles.contsct__list}>
    {contactsData.map(({ name, number, id }) => (
      <li key={id} className={styles.contact__list_el}>
        <p className={styles.contact__list_text}>
          {name}: {number}
        </p>
        <button onClick={() => onDeleteContact(id)}>delete</button>
      </li>
    ))}
  </ul>
);

const mapStateToProps = state => ({
  contactsData: phonebookSelectors.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(phonebookOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
