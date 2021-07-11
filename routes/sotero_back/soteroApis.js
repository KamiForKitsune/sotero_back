
const moment = require('moment');
module.exports= (api, db, uri, dbopt, rqt) => {
// api = ip

    api.post('/endpointUnmo', async function (req, res) {
        try {
            

        } catch (error) {
            console.log(error)
        }
    })

    api.post('/EndPoint', function(req, res){
        try {
            


        } catch (error) {
            
        }



    })

    api.get("/getComuna", async function (req, res) {
        console.log("Consultamos las comunas");
        const region = req.query.id_region;
        try {
            // Tomamos una variable que tome la coleccion
          comuna = database.collection("comuna");
            // Desde la coleccion creamos una variable que nos permita tomar la comuna
          var comm = await comuna
            .aggregate([
              {
                //   Hacemos match con la id_region con la region que nos estan pasando por req
                $match: {
                  id_region: region,
                },
              },
            ])
            .toArray();
        } catch (error) {
          console.log(error);
        }
        // Aqui le enviamos el json como respuesta
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Content-Type", "application/x-www-form-urlencoded");
        res.setHeader("Accept", "application/json");
        res.json(comm);
      });
    



    
     


}