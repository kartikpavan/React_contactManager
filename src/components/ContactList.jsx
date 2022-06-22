import React from 'react';
import ContactCard from './ContactCard';
const ContactList = ({ contacts }) => {
	return (
		<div>
			{contacts.map((contact) => {
				return <ContactCard contact={contact} />;
			})}
		</div>
	);
};

export default ContactList;
