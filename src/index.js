import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './redux/reducer'
import initialStore from './redux/store'
import registerServiceWorker from './registerServiceWorker';

document.addEventListener('DOMContentLoaded', function() {
// Loads all assets before rendering
	const store = createStore(reducer, initialStore);
	ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
})

registerServiceWorker();
