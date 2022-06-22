import React from 'react';

class AddContact extends React.Component {
	state = {
		name: '',
		email: '',
	};
	add = (e) => {
		e.preventDefault();
		if (this.state.name === '' || this.state.email === '') {
			alert('All Fields are mandatory');
			return;
		}
		this.props.addContactHandeler(this.state);
		this.setState({ name: '', email: '' });
	};
	render() {
		return (
			<div className="m-2">
				<h1 className="text-2xl font-semibold">Add Contact</h1>
				<form onSubmit={this.add}>
					<div className="my-2">
						<input
							type="text"
							placeholder="Enter Full Name"
							className="input input-bordered w-full max-w-xs"
							value={this.state.name}
							onChange={(e) => this.setState({ name: e.target.value })}
						/>
					</div>
					<div className="my-2">
						<input
							type="text"
							placeholder="Enter Email"
							className="input input-bordered w-full max-w-xs"
							value={this.state.email}
							onChange={(e) => this.setState({ email: e.target.value })}
						/>
					</div>
					<button type="Submit" className="btn btn-primary text-lg">
						Add
					</button>
				</form>
			</div>
		);
	}
}
export default AddContact;
