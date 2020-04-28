import React from 'react';
import ReactDOM from 'react-dom';
import { StateProvider } from './store/store.js';
import App from './map';
import './index.scss';

const app = (
    <StateProvider>
      <App />
    </StateProvider>
);

ReactDOM.render(app, document.getElementById('root'));
