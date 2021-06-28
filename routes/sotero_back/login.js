var bcrypt = require('bcryptjs')
const jsonwebtoken = require('jsonwebtoken')
const jwt = require('express-jwt')

module.exports = (api, db, uri, dbopt, rqt) => {
    // [POST] /auth
    api.post('/auth', async function (req, res) {
        try {

            console.log(req.body)

            //Datos del usuario
            const user = req.body

            //Entrando a la base de datos
            client = await db.connect(uri, dbopt)
            config_db = client.db("maternidadSotero").collection('user')
          //  bot_db = client.db("WhatsappWeb").collection('WhatsappBots')
            user_login = await config_db.findOne({ nombre: user.usr })
            
            console.log('USER')
            console.log(user_login)
            if (user_login != null && user.psw != null) {

                var salt = bcrypt.genSaltSync(10)
                var hash = bcrypt.hashSync(user.psw, salt)
                console.log(hash)
                chkpass = await bcrypt.compare(req.body.psw, user_login.password)

                if (chkpass) {

                    var date = new Date();
                    date = date.toLocaleString()
                    update = await config_db.updateOne({ nombre: req.body.usr }, { $set: { lastLogin: date } })
                    if (update.result.nModified == 1 && update.result.ok == 1) {
                        const accessToken = jsonwebtoken.sign(
                            {
                                name: 'Usuario: ' + user_login.name,
                                id: user_login._id,
                                picture: user_login.picture,
                                email: user_login.email,
                                filter: user_login._id,
                            },
                            'dummy'
                        )
                        res.status(200).json({ token: accessToken })
                    } else {
                        console.log('Error')
                        res.status(401).json('error')
                        console.log('Error with Login 401')
                    }
                }else{
                    console.log('Error with Login')
                    res.status(401).json('error')
                    console.log('Error with Login 401')
                }
            } else {
                res.status(401).json('error')
                console.log('Error with Login 401')
            }

        } catch (error) {
            console.log(error)
        }
    })

    // [GET] /user
    api.get('/user', jwt({secret: 'dummy'}), (req, res, next) => {
        res.json({ user: req.user })
    })
    api.get('/userId', jwt({secret: 'dummy'}), (req, res, next) => {
        res.json({ user: req.user.id })
    })

    // [POST] /logout
    api.post('/logout', jwt({secret: 'dummy'}),(req, res, next) => {
        res.json({ status: 'OK' })
    })
}