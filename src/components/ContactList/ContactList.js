import React from 'react';
import PropTypes from 'prop-types';
import './ContactList.css';

const ContactList = ({ contacts, delContact }) => {
  return (
    <ul className="list">
      {contacts.map(contact => {
        return (
          <li className="list_item" key={contact.id}>
            <span>
              {contact.name}: {contact.number}
            </span>
            <button
              className="button_list"
              type="button"
              id={contact.id}
              onClick={() => delContact(contact.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  delContact: PropTypes.func,
};

export default ContactList;
