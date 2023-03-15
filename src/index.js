import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Amplify } from 'aws-amplify'
import config from './aws-exports';
import { AmplifyProvider } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { BrowserRouter } from 'react-router-dom';

Amplify.configure(config);
<head>

  <script
    async
    src="https://js.stripe.com/v3/pricing-table.js">
  </script>
</head>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AmplifyProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AmplifyProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
