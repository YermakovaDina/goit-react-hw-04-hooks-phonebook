import { useEffect, useState } from 'react';
import Container from './components/Container/Container';
import Form from './components/Forms/Form';
import Filter from './components/Filters/Filter';
import ContactList from './components/ContactList/ContactList';
//import { v4 as uuidv4 } from 'uuid';

import './App.css';

export default function App() {
  // const [initialContacts, setInitialContacts] = useState([]);
  const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('contacts')) ?? initialContacts
    );
  });
  const [filter, setFilter] = useState('');
  //newContactId = uuidv4();

  // //componentDidMount
  // useEffect(() => {
  //   const contacts = window.localStorage.getItem('contacts');
  //   if (contacts) {
  //     setContacts(JSON.parse(contacts));
  //   } else setContacts(initialContacts);
  // }, []);

  // componentDidUpdate
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = data => {
    if (contacts.some(contact => contact.name.includes(data.name))) {
      return alert(`${data.name} is already in contacts!`);
    }

    return { contacts: [data, ...contacts] };
  };

  const delContact = contactId => {
    setContacts([...contacts.filter(contact => contact.id !== contactId)]);
  };

  const chengeFilter = e => {
    setFilter(e.currentTarget.value.toLowerCase());
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
