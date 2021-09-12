const express = require('express');
const router= express.Router();
const keycloak= require('../config/keycloak-config').getkeycloak();


router.get('/anonymous', function(req,res){
    res.send('hola anonymous');
});

router.get('/user', keycloak.protect('user'), function(req,res){
    res.send('hola user');
});

router.get('/admin', keycloak.protect('admin'), function(req,res){
    res.send('hola admin');
});

router.get('/all-user', keycloak.protect(['user', 'admin']), function(req,res){
    res.send('hola all user');
});

module.exports= router;