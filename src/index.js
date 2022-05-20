import React from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import './index.css';
import App from './App';

import { store } from './app/store'
import { Provider } from 'react-redux'

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer autoClose={5000} />
      <App />
    </Provider>
  </React.StrictMode>
);
