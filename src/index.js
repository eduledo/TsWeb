import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import dotenv from 'dotenv';

const NODE_ENV = process.env.NODE_ENV || 'development';

if (NODE_ENV === 'development') {
    dotenv.config({ path: '.env.development' });
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
