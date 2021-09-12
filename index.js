const express = require('express');
const app= express();

const keycloak= require('./config/keycloak-config').initKeycloak();
app.use(keycloak.middleware());

const testController= require('./controller/test-controller');
app.use('/test', testController);

app.get('/', function(req,res){
    res.send('el servidor esta funcionando');
});

app.listen(3000);