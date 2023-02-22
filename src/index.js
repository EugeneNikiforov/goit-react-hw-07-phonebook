import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import { Provider } from 'react-redux';
// import { persistor, store } from 'redux/store';
import { store } from 'redux/store';
// import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <PersistGate persistor={persistor} loading={null}>
//         <App />
//       </PersistGate>
//     </Provider>
//   </React.StrictMode>
// );
