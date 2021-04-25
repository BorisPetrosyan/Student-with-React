import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



const application = (
    
    <Provider store={store}>
        <BrowserRouter>
             <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(application, document.getElementById('root'));
serviceWorker.unregister();
