import React, { Component } from 'react';
import './loading.css';

class Loading extends Component {

	render(){
		return(

		// Display loading page
		<div className="loadingouter">
			<div className="loading">
				<div class="cssload-container">
					<div class="cssload-whirlpool"></div>
				</div>
			</div>
		</div>
		);
	}	
}

export default Loading;