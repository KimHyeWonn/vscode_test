import React from 'react';
import ReactDOM from 'react-dom';
import Root from './client/Root';
//import registerServiceWorker from './registerServiceWorker';
import './index.css';
export { default as Home } from './pages/Home';
export { default as About } from './pages/About';

ReactDOM.render(<Root />, document.getElementById('root'));
//registerServiceWorker();
