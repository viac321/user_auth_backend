const { getAll, create, getOne, remove, update, verifyUser, logIn, logged } = require('../controllers/user.controller');
const express = require('express');
const { verifyJwt } = require('../utils/verifyJWT');

const routerUser = express.Router();

routerUser.route('/')
    .get(verifyJwt,getAll)
    .post(create);

routerUser.route('/login')
    .post(logIn)    

routerUser.route('/me')
    .get(verifyJwt, logged)        



routerUser.route('/verify/:code')
    .get(verifyUser)

routerUser.route('/:id')
    .get(verifyJwt, getOne)
    .delete(verifyJwt, remove)
    .put(verifyJwt, update);

module.exports = routerUser;