



const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const path = require('path');
const { response } = require('express');
const router = express.Router();

//Body-Parser is depracated but you still need to know how to use it


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

router.get('/',function(req,res){
    response.sendfile(path.join(__dirname + '/index.html'));
//_dirname 
})

router.get('/about',function(req,res){
    response.sendfile(path.join(__dirname + '/about.html'));
//_dirname 
})

router.get('/sitemap',function(req,res){
    response.sendfile(path.join(__dirname + '/sitemap.html'));
//_dirname 
})

router.post('/game', function(req, res){
  //res.send(req.body.username);
  let user = req.body.username
  let player = req.body.player;
});

app.use('/', router);
app.listen(process.env.port || port);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';