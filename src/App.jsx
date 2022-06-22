import React, { useState } from 'react';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';

const App = () => {
	const [contacts, setContacts] = useState([]);

	const addContactHandeler = (contact) => {
		console.log(contact);
		setContacts([...contacts, contact]);
	};

	return (
		<div>
			<Header />
			<AddContact addContactHandeler={addContactHandeler} />
			<ContactList contacts={contacts} />
		</div>
	);
};

export default App;
