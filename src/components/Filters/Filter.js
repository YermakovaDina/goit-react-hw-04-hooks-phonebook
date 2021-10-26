import React from 'react';
import PropTypes from 'prop-types';
import './Filter.css';

const Filter = ({ filter, onChange }) => {
  return (
    <label className="filtr_label">
      Find contacts by name
      <input
        className="filtr_input"
        type="text"
        name="filter"
        //name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Введите имя контакта. Поиск не чувствительный к регистру вводимых символов."
        required
        value={filter}
        onChange={onChange}
      ></input>
    </label>
  );
};

Filter.protoType = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};

export { Filter };
