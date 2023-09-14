const express = require('express');
const router = express.Router();
const controller = require('../controller/proyectos.js')


module.exports = function(){

    router.get('/', controller.home);
    router.get('/2', controller.home2);
    return router;
}

