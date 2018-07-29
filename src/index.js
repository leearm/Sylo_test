import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './redux/reducer'
import initialStore from './redux/store'
import registerServiceWorker from './registerServiceWorker';
import $ from 'jquery'; 
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';


// Jquery UI used here to re-szie the Root div without scrollbars
  $( function() {
    $( '#root' ).resizable();
  } );


document.addEventListener('DOMContentLoaded', function() {
// Loads all assets before rendering

	const store = createStore(reducer, initialStore);
	ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
})

registerServiceWorker();
