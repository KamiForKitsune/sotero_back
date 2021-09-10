var bcrypt = require('bcryptjs')
const jsonwebtoken = require('jsonwebtoken')
const jwt = require('express-jwt')

module.exports = (api, db, uri, dbopt, rqt) => {
    api.post('/login', async function (req, res) {

        try {
            console.log(req.body)
            const user = req.body
            client = await db.connect(uri, dbopt)
            config_db = client.db("maternidadSotero").collection('usuario')
           if (user !=null) {
            finduser = await config_db.findOne({ nombre: user.nombre })
            
            if (finduser != null){

                var salt = bcrypt.genSaltSync(12)
                var hash = bcrypt.hashSync(user.contrasena, salt)
                console.log(hash)
                chkpass = await bcrypt.compare(req.body.contrasena, finduser.contrasena)

                if (chkpass) {
                    console.log("Contraseña valida")

                    var date = new Date();
                    date = date.toLocaleString()

                    const accessToken = jsonwebtoken.sign(
                                {
                                    name: finduser.name,
                                    id: finduser._id,
                                },
                                'dummy'
                            )
                            res.status(200).json({ token: accessToken })
                }else{
                    console.log('Error with Login')
                    res.status(401).json('error')
                    console.log('Error with Login 401')
                }
                }else{
                    console.log('No se ha encontrado al usuario')
                }  
           }else{
               console.log("Sin datos")
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