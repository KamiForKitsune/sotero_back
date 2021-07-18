const http = require ('http')
const express = require('express')
const app = express()
const path = require('path')
const server = http.createServer(app)
const bodyParser = require('body-parser')

var db = require('mongodb').MongoClient;

const dbopt = {useNewUrlParser: true}
var cors = require('cors')
const rqt = require('axios').default;
const jwt = require('express-jwt')

const uri = 'mongodb+srv://ynakbsotero100:jllwrJKg0X4V7kF7@sotero01.ok7h1.mongodb.net/soteroMaternidad?retryWrites=true&w=majority";'
app.use(bodyParser.json());       // JSON-encoded bodies


app.use(bodyParser.urlencoded({     // URL-encoded bodies
	extended: true
}));
app.use(cors())

// Configurar cabeceras y cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


const middleware = jwt({secret: 'dummy'}).unless({path:['/api/auth', '/images']})

// app.use(middleware)
// app.use(function (err, req, res, next) {
//   console.log('Funcion middleware')

//   const authHeader = req.headers.authorization

//   if (authHeader) {
//     const token = authHeader.split(' ')[1];
//     console.log('jwt',jwt)
//     next();
//     jwt.verify(token, 'dummy', (err, user) => {
//        if (err) {
//            return res.sendStatus(403);
//        }

//        req.user = user;
//        next();
//     });
//   } else {
//       res.sendStatus(401);
//   }
// });

api = express.Router()

require('./routes/sotero_back/index')( api, db, uri, dbopt, rqt)
app.use('/Router', api)


server.listen(3000, ()=>{
  db.connect(uri, {useNewUrlParser: true}, (error, client) =>{
    if(error){
      throw error;
    }
    // console.log(api)
    console.log("Estoy conectadisisisiismo")
    console.log("Y bueno... vamos a juga")
    // console.log("Conectado en:",)
    database = client.db("maternidadSotero")

  })
});
