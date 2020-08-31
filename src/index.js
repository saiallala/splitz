import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './State_Management/store';
import * as serviceWorker from './serviceWorker';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ScrollToTop from './shared/components/ScrollToTop/ScrollToTop';

ReactDOM.render(
    <Provider store={store}> 
        <BrowserRouter>
            <ScrollToTop/> 
            <App/>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
