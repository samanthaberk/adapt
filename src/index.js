import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './App/App';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
