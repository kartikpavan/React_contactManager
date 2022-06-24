import React from 'react';
import ContactCard from './ContactCard';
const ContactList = ({ contacts, removeContactHandeler }) => {
	return (
		<div>
			{contacts.map((contact) => {
				return (
					<ContactCard
						contact={contact}
						removeContactHandeler={removeContactHandeler}
						key={contact.id}
					/>
				);
			})}
		</div>
	);
};

export default ContactList;
