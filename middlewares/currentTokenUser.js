var bcrypt = require('bcryptjs')
const jsonwebtoken = require('jsonwebtoken')
const jwt = require('express-jwt')

module.exports = function currentTokenUser(req, res, next){
    //obtener token de usuario
    console.log('MIDDLEWARE')
    var token = req.headers['authorization']
    
    if(!token){
        res.status(401).send({
            message: 'Token inválido'
        })
    }else{
        //token = token.replace('Bearer ', '')
        var test = jwt({secret: 'dummy'})
        console.log(test)
        console.log(req)
    }    
    
}