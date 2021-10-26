import { useState, useEffect } from 'react';
//import { v4 as uuidv4 } from 'uuid';

import Container from './components/Container/Container';
import Form from './components/Forms/Form';
import { Filter } from './components/Filters/Filter';
import { ContactList } from './components/ContactList/ContactList';

import './App.css';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  // Requests to remote resources

  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  // Record into localStorage

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // //- - - !!!
  // const addContact = (userName, userNumber) => {
  //   if (
  //     contacts.some(
  //       contact => contact.name === userName || contact.number === userNumber,
  //     )
  //   ) {
  //     return alert(`${userName} is already in contacts!`);
  //   } else {
  //     setContacts(contacts => {
  //       const newContact = {
  //         id: uuidv4(),
  //         name: userName,
  //         number: userNumber,
  //       };
  //       return [newContact, ...contacts];
  //     });
  //   }
  // };
  // //- - -
  // // const addContact = (userName, userNumber) => {
  // //   const contactsArr = [];

  // //   contacts.forEach(e => {
  // //     contactsArr.push(e.name, e.number);
  // //   });

  // //   if (contactsArr.includes(userNumber || userName.toLowerCase())) {
  // //     return alert('This person or number is already in contacts');
  // //   } else {
  // //     setContacts(prevState => [
  // //       { id: uuidv4(), name: userName, number: userNumber },
  // //       ...prevState,
  // //     ]);
  // //   }
  // // };
  // //- - -

  // // Delete contact
  // const delContact = contactsId => {
  //   setContacts(contacts =>
  //     contacts.filter(contact => contact.id !== contactsId),
  //   );
  // };

  // // Filter del return

  // const changeFilter = event => {
  //   setFilter(event.currentTarget.value);
  // };

  // // Searching by filter

  // // const turnOnFilter = (filter, contact) => {
  // //   // const normalFilter = filter.toLowerCase();

  // //   // return contacts.filter(contact =>
  // //   //   contact.name.toLowerCase().includes(normalFilter),
  // //   // );
  // // }; , contact.name.includes(filter)
  // const turnOnFilter = (contacts, filter) => {
  //   return contacts.filter(contact => contact.name === filter);
  // };
  // const contactList = turnOnFilter(contacts, filter);
  //- - -
  const addContact = data => {
    if (contacts.some(contact => contact.name !== data.name)) {
      return alert(`${data.name} is already in contacts!`);
    }

    setContacts([...contacts, data]);
  };

  const delContact = currentId => {
    setContacts([...contacts.filter(contact => contact.id !== currentId)]);
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const turnOnFilter = () => {
    return contacts.filter(contact => contact.name === filter);
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <Form onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />

      <ContactList contacts={turnOnFilter()} delContact={delContact} />
    </Container>
  );
}

// export default function App() {
//   const [contacts, setContacts] = useState([]);
//   const [filter, setFilter] = useState('');

//   //componentDidMount
//   useEffect(() => {
//     const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
//     if (parsedContacts) {
//       setContacts(parsedContacts);
//     }
//   }, []);

//   // componentDidUpdate
//   useEffect(() => {
//     window.localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   //- - -
//   //Adde contact
//   // const addContact = data => {
//   //   const someContact = contacts.some(contact =>
//   //     contact.name.includes(data.name),
//   //   );
//   //   if (someContact) {
//   //     return alert(`${data.name} is already in contacts!`);
//   //   }
//   //   return { contacts: [data, ...prevState.contacts] };
//   // };

//   //- - -
//   // Add contact
//   const addContact = data => {
//     // generation id
//     const contactsNew = {
//       id: uuidv4(),
//       ...data,
//     };

//     const someContact = contacts.some(
//       contact => contact.name.toLowerCase() === data.name.toLowerCase(),
//     );

//     if (someContact) {
//       alert(`${data.name} is already in contacts`);
//       return;
//     }
//     //Add the new contact
//     setContacts(prevState => [contactsNew, ...prevState]);
//   };
//   //- - -
//   // const addContact = data => {
//   //   if (contacts.some(contact => contact.name.includes(data.name))) {
//   //     return alert(`${data.name} is already in contacts!`);
//   //   }

//   //   setContacts([...contacts, data]);
//   // };
//   //- - -

//   // Delete contact
//   const delContact = contactId => {
//     setContacts([...contacts.filter(contact => contact.id !== contactId)]);
//   };
//   //- - -
//   // Delete contact
//   // const delContacts = (contactsId) => {
//   //     setContacts((contacts) =>
//   //       contacts.filter((contact) => contact.id !== contactsId)
//   //     );
//   // };
//   //- - -

//   const chengeFilter = e => {
//     return setFilter(e.currentTarget.value.toLowerCase());
//   };

//   // const turnOnFilter = () => {
//   //   const normFilter = filter.toLocaleLowerCase();

//   //   return contacts.filter(contact =>
//   //     contact.name.toLowerCase().includes(normFilter),
//   //   );
//   // };

//   //const turnOnFilterVisible = turnOnFilter();
//   //- - -
//   const turnOnFilter = (contacts, filter) => {
//     return contacts.filter(({ name }) =>
//       name.toLowerCase().includes(filter.toLowerCase()),
//     );
//   };
//   //- - -

//   return (
//     <Container>
//       <h1>Phonebook</h1>
//       <Form onSubmit={addContact} />

//       <h2>Contacts</h2>
//       <Filter value={filter} onChange={chengeFilter} />

//       <ContactList
//         contacts={turnOnFilter(contacts, filter)}
//         delContact={delContact}
//       />
//     </Container>
//   );
// }
