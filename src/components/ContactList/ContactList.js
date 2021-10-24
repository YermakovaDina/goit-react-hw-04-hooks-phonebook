import React from 'react';
//import PropTypes from 'prop-types';
import './ContactList.css';

const ContactList = ({ contacts, delContact }) => {
  <ul className="list">
    {contacts.map(({ id, name, number }) => (
      <li className="list_item" key={id}>
        <span>
          {name}: {number}
        </span>
        <button
          className="button_list"
          type="button"
          id={id}
          onClick={() => delContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>;
};

// ContactList.propTypes = {
//   contacts: PropTypes.array,
//   delContact: PropTypes.func,
// };

export default ContactList;
