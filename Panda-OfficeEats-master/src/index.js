import React from 'react';
import ReactDOM from 'react-dom';

//import SearchCriteria from './components/SearchCriteria';
import store from "./store";
import {Provider} from "react-redux";
import './index.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import App from './containers/App';
// import configureStore from './store/configureStore'


ReactDOM.render(
    <Provider store={store}>
        <App />
        {/*<SearchCriteria />*/}
    </Provider>,
    document.getElementById('root')
);
