import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';

import App from './components/App/App';
// import { store, persistor } from './redux/store';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> */}
        <BrowserRouter basename="/rent-car">
          <App />
        </BrowserRouter>
      {/* </PersistGate>
    </Provider> */}
  </React.StrictMode>
);