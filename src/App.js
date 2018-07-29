import React, { Component } from 'react';
import Header from './header';
import './App.css';
import User from './user';
import Loading from './loading';
import Navigation from './navigation';
import {connect} from 'react-redux';
import {mapStateToProps, mapActionsToProps} from './redux/helper';
import cx from 'classnames';
import request from 'superagent';

class App extends Component {


    //Load data through JSON. there is a 1.5 second delay added also.
  componentDidMount() {
      setTimeout(() => {
          request.get('/users.json').then((data)=> {
              this.props.loadData(data.body);
          });
      }, 1500)
  }

  render() {
    //Open and close toggle through Redux
  	let classes = cx({
			"open-menu": this.props.menuOpen
		});

    return (
        <div className="App">
            <div id="wrapper" className={classes}>
            	<Header />
                  <div id="user_scroll">
                      {this.props.users ?  <User users={this.props.users} /> : <Loading />}
                  </div>   
            </div>
   			      <Navigation />
        </div>
    );
  }
}

export default connect(mapStateToProps, mapActionsToProps)(App);
