import React, { Component } from 'react';
import './loading.css';

class Loading extends Component {

	render(){
		return(

		// Loading page with spinner
		<div className="loadingouter">
			<div className="loading">
				<div className="cssload-container">
					<div className="cssload-whirlpool"></div>
				</div>
			</div>
		</div>
		);
	}	
}

export default Loading;