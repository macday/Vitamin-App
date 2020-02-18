import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import Landing from './components/App/Landing'

import Signup from './components/App/Signup'

// ReactDOM.render(<Landing />, document.getElementById('root'));
ReactDOM.render(<Signup />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
