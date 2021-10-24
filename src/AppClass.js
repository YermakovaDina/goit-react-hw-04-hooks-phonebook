// import './App.css';
// import { Component } from 'react';
// import Container from './components/Container/Container';
// import Form from './components/Forms/Form';
// import Filter from './components/Filters/Filter';
// import ContactList from './components/ContactList/ContactList';
// import { v4 as uuidv4 } from 'uuid';

// class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };
//   newContactId = uuidv4();

//   addContact = data => {
//     this.setState(prevState => {
//       if (
//         prevState.contacts.some(contact => contact.name.includes(data.name))
//       ) {
//         return alert(`${data.name} is already in contacts!`);
//       }

//       return { contacts: [data, ...prevState.contacts] };
//     });
//   };

//   delContact = contactId => {
//     const state = this.state;
//     const visibleContacts = state.contacts.filter(
//       contact => contact.id !== contactId,
//     );
//     this.setState({ contacts: visibleContacts });
//     return visibleContacts;
//   };

//   chengeFilter = e => {
//     this.setState({ filter: e.currentTarget.value.toLowerCase() });
//   };

//   //localStorage
//   componentDidMount() {
//     console.log('App componentDidMount');

//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts) ?? [];

//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }
//   componentDidUpdate(prevProps, prevState) {
//     console.log('App componentDidMount');

//     if (this.state.contacts !== prevState.contacts) {
//       console.log('Обновилось поле contacts');

//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }
//   //

//   render() {
//     const { contacts, filter } = this.state;
//     const visibleContacts = contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase()),
//     );

//     return (
//       <Container>
//         <h1>Phonebook</h1>
//         <Form onSubmit={this.addContact} />

//         <h2>Contacts</h2>
//         <Filter value={this.state.filter} onChange={this.chengeFilter} />

//         <ContactList contacts={visibleContacts} delContact={this.delContact} />
//       </Container>
//     );
//   }
// }

// export default App;
