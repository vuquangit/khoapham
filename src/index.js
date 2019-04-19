import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


//var express = require('express'); // Get the module
//var app = express(); //// Create express by calling the prototype in var express
//const port=3000;
//app.get('/', function(req, res){ res.render('homepage'); });
//var mang= ["Android", "IOS", "PHP", "React"];
//app.post('/getNotes', (req,res)=> res.send(mang));



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
