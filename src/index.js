import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css'

import AV from 'leancloud-storage'
window.AV = AV
var APP_ID = 'D47KpeY1SAseHqHFUMUrsBJr-gzGzoHsz';
var APP_KEY = '6rB7OIHokACubffbDG62YXKH';
window.AV.init({
    appId: APP_ID,
    appKey: APP_KEY
  });
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
