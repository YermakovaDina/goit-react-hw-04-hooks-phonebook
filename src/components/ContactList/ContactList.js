import React from 'react';
import PropTypes from 'prop-types';
import './ContactList.css';

const ContactList = ({ contacts, onDeleteContacts }) => (
  <ul className="list">
    {contacts.map(({ id, name, number }) => (
      <li className="list_item" key={id}>
        <span>
          {name}: {number}
        </span>
        <button className="button_list" onClick={() => onDeleteContacts(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  ).isRequired,
  onDeleteContacts: PropTypes.func.isRequired,
};

export { ContactList };
