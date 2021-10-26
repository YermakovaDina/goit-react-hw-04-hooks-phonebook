import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Container from './components/Container/Container';
import { ContactList } from './components/ContactList/ContactList';
import { Filter } from './components/Filters/Filter';
import { Form } from './components/Forms/Form';

import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // Add contact
  const forSubmitHandler = text => {
    // "id" generation
    const contactsNew = {
      id: uuidv4(),
      ...text,
    };

    const someContact = contacts.some(
      contact => contact.name.toLowerCase() === text.name.toLowerCase(),
    );

    if (someContact) {
      alert(`${text.name} is already in contacts`);
      return;
    }

    // Add the new contact
    setContacts(prevState => [contactsNew, ...prevState]);
  };

  // Delete the contact
  const deleteContacts = contactsId => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== contactsId),
    );
  };

  // Filter
  const changeFilter = event => {
    return setFilter(event.currentTarget.value);
  };

  // Searching by filter
  const getVisibleContacts = () => {
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter),
    );
  };

  const getFilterVisibleContacts = getVisibleContacts();

  return (
    <Container>
      <h1>Phonebook</h1>
      <Form onSubmit={forSubmitHandler} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={getFilterVisibleContacts}
        onDeleteContacts={deleteContacts}
      />
    </Container>
  );
}

export default App;
