import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware,compose} from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import reducer from './reducers/combineReducer'

const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;


const store= createStore(
    reducer,
    composeEnhancers(applyMiddleware(reduxThunk))
    );


ReactDOM.render(
  <React.StrictMode>

    <Provider store={store}>
      <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

