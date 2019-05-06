import React, { Component } from 'react';
import './navigation.css';
import {connect} from 'react-redux';
import {mapStateToProps, mapActionsToProps} from './redux/helper';
import cx from 'classnames';

class Navigation extends Component {

	render(){
		let classes = cx({
			 "open-menu": this.props.menuOpen
		});
		return(
			<div className="nav_outer">
			<div className="nav_icons">
				<div id={classes} className="icon one"><img className="you" alt="" src="/assets/you.jpg"/></div>
				<div id={classes} className="icon two"><img className="person" alt="" src="/assets/person.png"/></div>
				<div id={classes} className="icon three"><img className="favorite" alt="" src="/assets/favorite.png"/></div>
				<div id={classes} className="icon four"><img className="new_message" alt="" src="/assets/new_message.png"/></div>
				<div id={classes} className="icon five"><img className="settings" alt="" src="/assets/settings.png"/></div>
			</ div>	
			</div>
			);
	}	
}

export default connect(mapStateToProps, mapActionsToProps)(Navigation);