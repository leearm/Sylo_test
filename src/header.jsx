import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {mapStateToProps, mapActionsToProps} from './redux/helper';
import './fonts.css';
import './header.css';

class Header extends Component {

	toggleMenu() {
		this.props.toggleMenu();
	}

	render(){
		return(
			<div className="header_holder">
				<div className="header">
					<div className='menuitem_outer'><img onClick={this.toggleMenu.bind(this)} className="menuitem"  src='/assets/menu.png' alt="Menu item"/></div>
					<div className='centertext'><h4>Index</h4></div>
				</div>
			</div>
			);
	}	
}

export default connect(mapStateToProps, mapActionsToProps)(Header);

Header.propTypes = {
  toggleMenu: PropTypes.func.isRequired
};