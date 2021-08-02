
const moment = require('moment');
module.exports= (api, db, uri, dbopt, rqt) => {
// api = ip
    // Obtener actividad
    api.get('/ObtenerActividad', async function(req, res){

        console.log("Obteniendo actividad")
        try {
          actividad = database.collection("actividad");
          var actividades = await actividad
            .find()
            .toArray();
        } catch (error) {
          console.log("Error al obtener actividad: ",error);
        }
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Content-Type", "application/x-www-form-urlencoded");
      res.setHeader("Accept", "application/json");
      res.json(actividades);
      });
    // Obtener anticonceptivo
    api.get('/ObtenerAnticonceptivo', async function(req, res){

      console.log("Obteniendo anticonceptivo")
      try {
        anticonceptivo = database.collection("anticonceptivo");
        var anticonceptivos = await anticonceptivo
          .find()
          .toArray();
      } catch (error) {
        console.log("Error al obtener anticonceptivo: ",error);
      }
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/x-www-form-urlencoded");
    res.setHeader("Accept", "application/json");
    res.json(anticonceptivos);
    });
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
      
    // // insertar controlSignos
    // api.post('/insertarEcografia', async function(req, res){
    //   try {
    //     console.log("Insertando ecografia")
    //     // Aqui se ponen las IDS!!!
    //     var embarazo = req.body.embarazo;
    //     try {
    //       eco = database.collection("ecografia");
    //       var estructura= {
    //         indiceLa: req.body.indiceLa,
    //         canal: req.body.canal,
    //         funnel: req.body.funnel,
    //         pesoFetal: req.body.pesoFetal,
    //         pbf:req.body.pbf,
    //         idAspecto: req.body.idAspecto,
    //         idPresentacion:req.body.idPresentacion,
    //         idEmbarazo: embarazo,
    //       };
          
    //       var ecografia = await eco
    //         .insert(estructura)

    //     } catch (error) {
    //       console.log(error);
    //     }
  
    //   } catch (error) {
    //     console.log(error);
    //   }
  
    //   res.setHeader("Access-Control-Allow-Origin", "*");
    //   res.setHeader("Content-Type", "application/x-www-form-urlencoded");
    //   res.setHeader("Accept", "application/json");
    //   res.json(ecografia);
    //   });
    //   // Eliminar droga usada en el embarazo
    // api.post('/ActualizarEcografia', async function(req, res){
    //   try {
    //     console.log("Insertando ecografia")
    //     // Aqui se ponen las IDS!!!
    //     var embarazo = req.body.embarazo;
    //     try {
    //       eco = database.collection("ecografia");
    //       var estructura= {
    //         indiceLa: req.body.indiceLa,
    //         canal: req.body.canal,
    //         funnel: req.body.funnel,
    //         pesoFetal: req.body.pesoFetal,
    //         pbf:req.body.pbf,
    //         idAspecto: req.body.idAspecto,
    //         idPresentacion:req.body.idPresentacion,
    //         idEmbarazo: embarazo,
    //       };
          
    //       // var ecografia = await eco
    //       //   .updateOne({}estructura)

    //     } catch (error) {
    //       console.log(error);
    //     }
  
    //   } catch (error) {
    //     console.log(error);
    //   }
  
    //   res.setHeader("Access-Control-Allow-Origin", "*");
    //   res.setHeader("Content-Type", "application/x-www-form-urlencoded");
    //   res.setHeader("Accept", "application/json");
    //   res.json(drgsEmbarazo);
    //     });

    // // Listar drogas usadas en el embarazo
    // api.get('/ObtenerDrogasEmbarazo', async function(req, res){
    //   try {
    //     console.log("Obteniendo drogas usadas en el embarazo")
    //     const embarazo = req.body._id;
    //     try {
    //       drgEmbarazo = database.collection("drogasEmbarazo");
         
    //       var drgsEmbarazo = await drgEmbarazo
    //         .aggregate([
    //           {
    //             $match: {
    //               id_embarazo: embarazo,
    //             },
    //           }
    //         ])
    //         .toArray();
    //     } catch (error) {
    //       console.log(error);
    //     }
  
    //   } catch (error) {
    //     console.log(error);
    //   }
  
    //   res.setHeader("Access-Control-Allow-Origin", "*");
    //   res.setHeader("Content-Type", "application/x-www-form-urlencoded");
    //   res.setHeader("Accept", "application/json");
    //   res.json(drgsEmbarazo);
    //   });

      ///////////////////////////////////////////////////////////////////////////








      
    // Obtener derivacion
    api.get('/ObtenerDerivacion', async function(req, res){

      console.log("Obteniendo Derivacion")
      try {
        Derivaciones = database.collection("derivacion");
        var derivacion = await Derivaciones
          .find()
          .toArray();
      } catch (error) {
        console.log("Error al obtener anticonceptivo: ",error);
      }
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Content-Type", "application/x-www-form-urlencoded");
      res.setHeader("Accept", "application/json");
      res.json(derivacion);
      });

    // Obtener drogas
    api.get('/ObtenerDrogas', async function(req, res){

      console.log("Obteniendo Drogas")
      try {
        droga = database.collection("drogas");
        var drogas = await droga
          .find()
          .toArray();
      } catch (error) {
        console.log("Error al obtener anticonceptivo: ",error);
      }
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/x-www-form-urlencoded");
    res.setHeader("Accept", "application/json");
    res.json(drogas);
    });

    // insertar droga en el embarazo
    api.post('/insertarDrogaEmbarazo', async function(req, res){
      try {
        console.log("Insertando drogas usadas en el embarazo")
        // Aqui se ponen las IDS!!!
        var embarazo = req.body.embarazo;
        var droga = req.body.droga;
        try {
          drgEmbarazo = database.collection("drogasEmbarazo");
          var estructura= {
            idEmbarazo: embarazo,
            idDroga: droga


          };
          
          var drgsEmbarazo = await drgEmbarazo
            .insert(estructura)

        } catch (error) {
          console.log(error);
        }
  
      } catch (error) {
        console.log(error);
      }
  
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Content-Type", "application/x-www-form-urlencoded");
      res.setHeader("Accept", "application/json");
      res.json(drgsEmbarazo);
      });
      // Eliminar droga usada en el embarazo
    api.post('/EliminarDrogaEmbarazo', async function(req, res){
      try {
        console.log("eliminando droga usadas en el embarazo")
        //
        var embarazo = req.body.embarazo;
        var droga = req.body.droga;
          drgEmbarazo = database.collection("drogasEmbarazo");
          var estructura= {
            idEmbarazo: embarazo,
            idDroga: droga
          };
          
          var drgsEmbarazo = await drgEmbarazo
            .deleteOne({idEmbarazo: embarazo,
              idDroga: droga 
            });


  
      } catch (error) {
        console.log(error);
      }
  
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Content-Type", "application/x-www-form-urlencoded");
      res.setHeader("Accept", "application/json");
      res.json(drgsEmbarazo);
        });

    // Listar drogas usadas en el embarazo
    api.get('/ObtenerDrogasEmbarazo', async function(req, res){
      try {
        console.log("Obteniendo drogas usadas en el embarazo")
        const embarazo = req.body._id;
        try {
          drgEmbarazo = database.collection("drogasEmbarazo");
         
          var drgsEmbarazo = await drgEmbarazo
            .aggregate([
              {
                $match: {
                  id_embarazo: embarazo,
                },
              }
            ])
            .toArray();
        } catch (error) {
          console.log(error);
        }
  
      } catch (error) {
        console.log(error);
      }
  
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Content-Type", "application/x-www-form-urlencoded");
      res.setHeader("Accept", "application/json");
      res.json(drgsEmbarazo);
      });













  // // ELIMINACION
    // api.post("/EliminarAlgo", async function (req, res) {
    //   console.log("Eliminando XXXX");
    //   var IdcampoParaEliminar = req.body.IdcampoParaEliminar
    //   try {
        
    //     collection = database.collection("");

    //     eliminar = await collection.updateOne(
    //       {_id : ObjectId(IdcampoParaEliminar)},
    //       // Los datos no se eliminan por lo cual ponemos actualizaremos el "deleted" y lo pondremos true
    //       {$set : {
    //         deleted : true
    //       }}
    //     )
    //     console.log("Se ha eliminado XXXX");
    //   } catch (error) {
    //     console.log(error);
    //   }
  
    //   res.setHeader("Access-Control-Allow-Origin", "*");
    //   res.setHeader("Content-Type", "application/x-www-form-urlencoded");
    //   res.setHeader("Accept", "application/json");
    //   res.json(200);
    // });
    api.post("/CrearPaciente", async function (req, res){
      try {
        collection =  database.collection("paciente");
      // We should take the person with the background about her
        var estructura = {
          rut: req.body.rut,
          dVerificador: req.body.dVerificador,
          nombre: req.body.nombre,
          apellidoPaterno:req.body.apellidoPaterno,
          apellidoMaterno:req.body.apellidoMaterno,
          domicilio: req.body.domicilio,
          numeroDomicilio: req.body.numeroDomicilo,
          deptoCasa: req.body.deptoCasa,
          telefono: req.body.telefono,
          idEstudio: req.body.idEstudio,
          idEstadoCivil: req.body.idEstadoCivil,
          idPrevision: req.body.idPrevision,
          idActividad: req.body.idActividad,
          idGrupo: req.body.idGrupo,
          idComuna: req.body.idComuna
        }
        //  Aqui se inserta la estructura de datos en la coleccion paciente
        await collection.insert(estructura)
      } catch (error) {
        console.log("Error al crear paciente: ",error)
      }
    })

    api.post("/ActualizarDomicilioPaciente", async function (req, res){
      try {
        collection =  database.collection("paciente");
        
        //  Aqui se inserta la estructura de datos en la coleccion paciente
        await collection.updateOne({rut: req.body.rut},
          {$set:{
            domicilio: req.body.domicilio,numeroDomicilio,
            numeroDomicilio:req.body.numeroDomicilio,
            deptoCasa: req.body.deptoCasa,
            idComuna: req.body.idComuna,
        }})
      } catch (error) {
        console.log("Error al actualizar paciente: ",error)
      }
    })
 
    api.post("/ActualizarTelefono", async function (req, res){
      try {
        collection =  database.collection("paciente");  
        //  Aqui se inserta la estructura de datos en la coleccion paciente
        await collection.updateOne({rut: req.body.rut},
          {$set:{
            telefono: req.body.telefono,            
        }})
      } catch (error) {
        console.log("Error al actualizar paciente: ",error)
      }
    })
    // Actualizar progenitor actividad,grupo sanguineo, Estadocivil a discutir

    // NO SE ELIMINA PACIENTE


    // api.post("/CrearFichaA", async function (req, res){
    //   try {
    //     collection =  database.collection("paciente");
    //   // We should take the person with the background about her
      
    //   var paciente = collection.find({
    //     rut: req.body.rut
    //   })

    //   } catch (error) {
        
    //   }



    // })



    
     


}