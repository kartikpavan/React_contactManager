import React from 'react';
import { BiTrash } from 'react-icons/bi';
import user from '../images/user.png';

const ContactCard = ({ contact }) => {
	return (
		<div className="bg-gray-200 my-2 rounded-md p-4">
			<section className="flex justify-between items-center">
				<div className="flex flex-row items-center gap-2">
					<div class="avatar">
						<div class="w-16 rounded-full">
							<img src={user} alt="use" />
						</div>
					</div>
					<div>
						<h1 className="text-2xl font-semibold">{contact.name}</h1>
						<h1 className="text-md text-gray-500">{contact.email}</h1>
					</div>
				</div>
				<BiTrash size={30} color="red" />
			</section>
		</div>
	);
};

export default ContactCard;
