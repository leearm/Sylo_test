import React, { Component } from 'react';
import './fonts.css';
import './user.css';

// If the message is to long this will reduce it and add ... to the end of the message
function makeEllipsis(str) {
	if (str.length < 35)return str;
	return str.substr(0, 32) + "...";
}

class User extends Component {
	state = {

	};

	render(){
		return(
// Runs through data.js file to pull in the users data.
            this.props.users.map((user, i) => {
				return (
					<div key={`key-${i}`} className="messages_outer">
						<span className="messages_span_one"><img className="thumbnail"  src={`/assets/${user.picture}`}/></span>
						<span className="messages_span_two">
							<div className="user name">{user.name}</div>
							<div className="user last_message">{makeEllipsis(user.last_message)}</div>
							<div className="user last_sent">{user.sent} days ago</div>
						</span>
					</div>
				);
			})
		);
	}	
}

export default User;