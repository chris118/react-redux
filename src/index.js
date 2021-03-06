import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './components/App'
import todoApp from './reducers'

let store = createStore(todoApp)


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
