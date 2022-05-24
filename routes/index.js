
var express = require('express');
const { Collection } = require('mongodb');
const bcrypt = require('bcrypt')
const app = require('../app');
var router = express.Router();
const db = require('../database/connect')
db.connect()


router.get('/',(req,res)=>{
  res.send('Home')
})
router.get('/signup',(req,res)=>{
  res.render('signup')
})
router.post('/signup',(req,res)=>{
  res.send(req.body)
})

router.get('/login ',(req,res)=>{
  res.render('login')
})
router.post('/login',(req,res)=>{
  res.send(req.body)
})

module.exports = router
