import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {HashRouter} from 'react-router-dom';
import Main from "./routes";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HashRouter><Main /></HashRouter>, document.getElementById('root'));
registerServiceWorker();
