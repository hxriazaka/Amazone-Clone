import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer, { initialState } from './Context api/reducer';
import { StateProvider } from './Context api/stateprovider';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>  
  </React.StrictMode>,
  document.getElementById('root')
);

