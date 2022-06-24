import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';

const App = () => {
	const LOCAL_STORAGE_KEY = 'contacts';
	const [contacts, setContacts] = useState([]);

	const addContactHandeler = (contact) => {
		console.log(contact);
		setContacts([...contacts, { id: uuidv4(), ...contact }]);
	};

	const removeContactHandeler = (id) => {
		const newContactList = contacts.filter((item) => item.id !== id);
		setContacts(newContactList);
	};

	useEffect(() => {
		const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
		if (retriveContacts) setContacts(retriveContacts);
	}, []);

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
	}, [contacts]);

	return (
		<div>
			<Header />
			<AddContact addContactHandeler={addContactHandeler} />
			<ContactList
				contacts={contacts}
				removeContactHandeler={removeContactHandeler}
			/>
		</div>
	);
};

export default App;
