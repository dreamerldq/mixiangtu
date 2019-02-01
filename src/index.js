import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css'

import AV from 'leancloud-storage'
window.AV = AV
var APP_ID = '7mOJxvvWv2fHld65EhztFtTb-gzGzoHsz';
var APP_KEY = 'FWy1uNctVKlrdhOM7NT0CMNX';
window.AV.init({
    appId: APP_ID,
    appKey: APP_KEY
  });
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
