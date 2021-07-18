
const moment = require('moment');
module.exports= (api, db, uri, dbopt, rqt) => {
// api = ip

    
    // Listar comunas por region
    api.get('/ObtenerComunas', async function(req, res){
    try {
      console.log("Obteniendo comunas")
      // console.log(req.body)
      const id_reg = req.body.id_reg;
      // console.log(req.body.id_reg)
      try {
        // Comuna seria la colección de "comuna" existente en la base de datos
        // console.log(id_reg)
        comuna = database.collection("comuna");
        // console.log("================================================================")
        // console.log(comuna)
        // Aqui hacemos match con el id de region y tomamos todas las comunas que coincidan
        var comunas = await comuna
          .aggregate([
            {
              $match: {
                idRegion: id_reg,
              },
            }
          ])
          .toArray();
          console.log(comunas)
      } catch (error) {
        console.log(error);
      }

    } catch (error) {
      console.log(error);
    }

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/x-www-form-urlencoded");
    res.setHeader("Accept", "application/json");
    res.json(comunas);
    });

  // // ELIMINACION
  //   api.post("/EliminarAlgo", async function (req, res) {
  //     console.log("Eliminando XXXX");
  //     var IdcampoParaEliminar = req.body.IdcampoParaEliminar
  //     try {
        
  //       collection = database.collection("");

  //       eliminar = await collection.updateOne(
  //         {_id : ObjectId(IdcampoParaEliminar)},
  //         // Los datos no se eliminan por lo cual ponemos actualizaremos el "deleted" y lo pondremos true
  //         {$set : {
  //           deleted : true
  //         }}
  //       )
  //       console.log("Se ha eliminado XXXX");
  //     } catch (error) {
  //       console.log(error);
  //     }
  
  //     res.setHeader("Access-Control-Allow-Origin", "*");
  //     res.setHeader("Content-Type", "application/x-www-form-urlencoded");
  //     res.setHeader("Accept", "application/json");
  //     res.json(200);
  //   });

 
    // api.post("/uploadSomething", async function (req, res){
    //   try {
    //     collection =  database.collection("");
    //   } catch (error) {
        
    //   }



    // })



    
     


}