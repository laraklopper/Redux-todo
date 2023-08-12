import React from 'react';// Import the React module to use react functionalities
import ReactDOM from 'react-dom/client';//Import the ReactDom library to provide a method of rendering react components
import './index.css';//Import the CSS file
import App from './App';// Import the main component of the application
import reportWebVitals from './reportWebVitals';//Import the reportwebvitals component to measure performance metrics
import 'bootstrap/dist/css/bootstrap.min.css'; //Import React bootstrap
import { Provider } from 'react-redux';// Import the Redux Provider component
import store from './store/store';//Import the Redux store

// Create a root for rendering the React app using the element id
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application within the root instance
root.render(
  <React.StrictMode>
    <Provider store={store}>{/* Provide the Redux store to the entire application */}
      <App />
    </Provider>    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
