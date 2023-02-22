import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
// import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/FIlter';
import ContactList from './ContactList/ContactList';
import css from './App.module.scss';

export default function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.app}>
      <h1 className={css.appHeader}>PhoneBook</h1>
      <ContactForm />
      <div>
        <h2 className={css.appHeaderSec}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
    );
};

//  {contacts !== undefined && contacts.length > 0 ? (<ContactList />) : (<p>Your Phonebook is empty!</p>)}