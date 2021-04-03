import React, { useState } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const handleAddContact = newItem => {
    const coincidence = contacts.some(contact => contact.name === newItem.name);
    if (coincidence) {
      alert(`${newItem.name} is already in contacts`);
      return;
    }
    setContacts(prev => [...prev, newItem]);
  };
  const handleChangeFilter = e => {
    setFilter(e.currentTarget.value);
  };
  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />

      <h2>Contacts</h2>
      <Filter onChangeFilter={handleChangeFilter} />
      <ContactList contacts={visibleContacts} />
    </div>
  );
};

export default App;
