import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { GoogleAuthStore } from './components/GoogleAuthStore';

ReactDOM.render(
	<GoogleAuthStore>
		<Router>
			<App />
		</Router>
	</GoogleAuthStore>,
	document.getElementById('root')
);
