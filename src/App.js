import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './header';
import './App.css';
import User from './user';
import Navigation from './navigation';
import {connect} from 'react-redux';
import {mapStateToProps, mapActionsToProps} from './redux/helper';
import cx from 'classnames';

class App extends Component {

  render() {
    //Open and close toggle through Redux
  	let classes = cx({
			"open-menu": this.props.menuOpen
		});
    return (
      <div className="App">
      	  
          <div id="wrapper" className={classes}>
          	<Header />
          	<User />         
          </div>
 			      <Navigation />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapActionsToProps)(App);
