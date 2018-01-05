import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import NameForm from './NameForm';

ReactDOM.render(<NameForm />, document.getElementById('root'));
registerServiceWorker();
