const session = require('express-session');
const keycloak = require('keycloak-connect');

let _keycloak;

var keycloakConfig = {
    clientId: 'nodejs-microservice',
    bearerOnly: true,
    serverUrl: 'http://localhost:8080/auth',
    realm: 'Demo-antonio-mansilla',
    credentials:{
        secret: '84c461de-4ff0-4c27-9e8b-498b34a3cd06'
    }
};

function initKeycloak(){
    if(_keycloak){
        console.warn("trying to init keycloak again!");
        return _keycloak;
    }
    else{
        console.log("initializing keycloak");
        var memoryStore= new session.MemoryStore();
        _keycloak= new keycloak({store: memoryStore}, keycloakConfig);
        return _keycloak;
    }
}

function getkeycloak(){
    if(!_keycloak){
        console.error('keycloak has not been initialized. please called init first.');
    }
    return _keycloak;
}

module.exports= {
    initKeycloak,
    getkeycloak
};

