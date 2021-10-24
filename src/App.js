import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Container from './components/Container/Container';
import Form from './components/Forms/Form';
import { Filter } from './components/Filters/Filter';
import ContactList from './components/ContactList/ContactList';

import './App.css';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  //componentDidMount
  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  // componentDidUpdate
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // Add the contact
  // const addContact = data => {
  //   const someContact = contacts.some(contact =>
  //     contact.name.includes(data.name),
  //   );
  //   if (someContact) {
  //     return alert(`${data.name} is already in contacts!`);
  //   }
  //   return { contacts: [data, ...prevState.contacts] };
  // };

  //- - -
  // Add contact
  const addContact = data => {
    // generation id
    const contactsNew = {
      id: uuidv4(),
      ...data,
    };

    const someContact = contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase(),
    );

    if (someContact) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    //Add the new contact
    setContacts(prevState => [contactsNew, ...prevState]);
  };
  //- - -

  // Delete the contact
  const delContact = contactId => {
    setContacts([...contacts.filter(contact => contact.id !== contactId)]);
  };
  //- - -
  // const delContacts = (contactsId) => {
  //     setContacts((contacts) =>
  //       contacts.filter((contact) => contact.id !== contactsId)
  //     );
  // };
  //- - -

  const chengeFilter = e => {
    return setFilter(e.currentTarget.value.toLowerCase());
  };

  const turnOnFilter = () => {
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter),
    );
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <Form onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={chengeFilter} />

      <ContactList contacts={turnOnFilter} delContact={delContact} />
    </Container>
  );
}
