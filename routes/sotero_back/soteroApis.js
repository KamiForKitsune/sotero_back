
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
    // REVISAR
    api.post('/insertarControlSignos', async function(req, res){
      try {
        console.log("Insertando Control de signos")
        // Aqui se ponen las IDS!!!
        try {
          crtlsignos = database.collection("controlSignos");
          var estructura= {
            sistolica: req.body.sistolica,
            diastolica:req.body.diastolica,
            pulso: req.body.pulso,
            tempAxilar: req.body.tempAxilar,
            fechaHora: req.body.fechaHora,
          };
          
          var crtsigno = await crtlsignos
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
      res.json(crtsigno);
      });
      // Actualizar control de signos
    api.post('/ActualizarcontrolSignos', async function(req, res){
      try {
        console.log("Actualizar control de signos")
        // Aqui se ponen las IDS!!!
        try {
          crtlsignos = database.collection("controlSignos");
          var estructura= {
            sistolica: req.body.sistolica,
            diastolica:req.body.diastolica,
            pulso: req.body.pulso,
            tempAxilar: req.body.tempAxilar,
            fechaHora: req.body.fechaHora,
          };
          // estructura
          // var ecografia = await eco
          //   .updateOne({_id:ObjectId()})

        } catch (error) {
          console.log(error);
        }
  
      } catch (error) {
        console.log(error);
      }
  
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Content-Type", "application/x-www-form-urlencoded");
      res.setHeader("Accept", "application/json");
      res.json(crtlsignos);
        });

    // // Listar drogas usadas en el embarazo
    // api.get('/ObtenerControlSignos', async function(req, res){
    //   try {
    //     console.log("Obteniendo drogas usadas en el embarazo")
    //     const embarazo = req.body._id;
    //     try {
    //       crtlSignos = database.collection("controlSignos");
         
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

      // Ecografia
       // insertar controlSignos
    api.post('/insertarEcografia', async function(req, res){
      try {
        console.log("Insertando ecografia")
        // Aqui se ponen las IDS!!!
        var embarazo = req.body.embarazo;
        try {
          eco = database.collection("ecografia");
          var estructura= {
            indiceLa: req.body.indiceLa,
            canal: req.body.canal,
            funnel: req.body.funnel,
            pesoFetal: req.body.pesoFetal,
            pbf:req.body.pbf,
            idAspecto: req.body.idAspecto,
            idPresentacion:req.body.idPresentacion,
            idEmbarazo: embarazo,
          };
          
          var ecografia = await eco
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
      res.json(ecografia);
      });
      // Eliminar droga usada en el embarazo
    api.post('/ActualizarEcografia', async function(req, res){
      try {
        console.log("Insertando ecografia")
        // Aqui se ponen las IDS!!!
        var embarazo = req.body.embarazo;
        try {
          eco = database.collection("ecografia");
          var estructura= {
            indiceLa: req.body.indiceLa,
            canal: req.body.canal,
            funnel: req.body.funnel,
            pesoFetal: req.body.pesoFetal,
            pbf:req.body.pbf,
            idAspecto: req.body.idAspecto,
            idPresentacion:req.body.idPresentacion,
            idEmbarazo: embarazo,
          };
          // Ver con que parametro vamos a actualizar
          // var ecografia = await eco
          //   .updateOne({})

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

     // Listar drogas usadas en el embarazo
     api.get('/ObtenerEcografia', async function(req, res){
      try {
        console.log("Obteniendo ecografias")
        const embarazo = req.body._id;
        try {
          eco = database.collection("ecografia");
         
          var ecos = await eco
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
      res.json(ecos);
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
      // <<_Embarazo_>>
            // Ecografia
    api.post('/InsertarEmbarazo', async function(req, res){
      try {
        console.log("Insertando embarazo")
        // Aqui se ponen las IDS!!!
        try {
          embarazos = database.collection("embarazo");
          var estructura= {
            pesoNormal: req.body.pesoNormal,
            talla: req.body.talla,
            fur:req.body.fur,
            furConfiable: req.body.furConfiable,
            furOperacional: req.body.furOperacional,
            comentario: req.body.comentario,
            fecha:req.body.fecha,
            idTipoEmba: req.body.idTipoEmba,
            idPerdida: req.body.idPerdida,
            idAnticonceptivo: req.body.idAnticonceptivo,
            idEstNutri:req.body.idEstNutri,
            idPaciente: req.body.idPaciente,
          };
          
          var embarazo = await embarazos
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
      res.json(embarazo);
      });
      // Eliminar droga usada en el embarazo
    api.post('/ActualizarEmbarazo', async function(req, res){
      try {
        console.log("Insertando Embarazo")
        // Aqui se ponen las IDS!!!
        try {
          embarazos = database.collection("embarazo");
          var estructura= {
            pesoNormal: req.body.pesoNormal,
            talla: req.body.talla,
            fur:req.body.fur,
            furConfiable: req.body.furConfiable,
            furOperacional: req.body.furOperacional,
            comentario: req.body.comentario,
            fecha:req.body.fecha,
            idTipoEmba: req.body.idTipoEmba,
            idPerdida: req.body.idPerdida,
            idAnticonceptivo: req.body.idAnticonceptivo,
            idEstNutri:req.body.idEstNutri,
            idPaciente: req.body.idPaciente,
          };
          // Ver con que parametro vamos a actualizar
          // var embrz = await eco
          //   .updateOne({_id:ObjectId()})

        } catch (error) {
          console.log(error);
        }
  
      } catch (error) {
        console.log(error);
      }
  
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Content-Type", "application/x-www-form-urlencoded");
      res.setHeader("Accept", "application/json");
      res.json(embrz);
        });

     // Listar drogas usadas en el embarazo
     api.get('/ObtenerEmbarazo', async function(req, res){
      try {
        console.log("Obteniendo embarazo")
        const paciente = req.body.paciente;
        try {
          embarazos = database.collection("embarazo");
         
          var embrz = await embarazos
            .aggregate([
              {
                $match: {
                  idPaciente: paciente,
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
      res.json(embrz);
      });
/////////////////////////////////////////////////////////////////////////////////////////
     // Listar drogas usadas en el embarazo
     api.get('/ObtenerEmbarazoPaciente', async function(req, res){

        console.log("Obteniendo embarazo")
        const paciente = req.body.paciente;
        try {
          embarazos = database.collection("embarazo");
         
          var embrz = await embarazos
            .aggregate([
              {
                $match: {
                  idPaciente: paciente,
                },
              }
            ])
            .toArray();

        } catch (error) {
          console.log(error);
        }

  
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Content-Type", "application/x-www-form-urlencoded");
      res.setHeader("Accept", "application/json");
      res.json(embrz);
      });

      // listar establecimiento
      api.get('/ObtenerEstablecimiento', async function(req, res){
        console.log("Obteniendo establecimiento")
        var comuna = req.body.comuna;
        var idTipoEst = req.body.idTipoEst;
        // Si no existen ambos datos se toma un find empthy de datos dentro
        try {

          est = database.collection("establecimiento");
         
          var establecimientos = await est
            .find()
            .toArray();

        } catch (error) {
          console.log(error);
        }

  
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Content-Type", "application/x-www-form-urlencoded");
      res.setHeader("Accept", "application/json");
      res.json(establecimientos);
      });
      
      // Estado civil
      api.get('/ObtenerEstadoCivil', async function(req, res){
        console.log("Obteniendo Estado Civil")
        // Si no existen ambos datos se toma un find empthy de datos dentro
        try {

          estadoCivil = database.collection("estadoCivil");
          
          var estcivil = await estadoCivil
            .find()
            .toArray();

        } catch (error) {
          console.log(error);
        }

  
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Content-Type", "application/x-www-form-urlencoded");
      res.setHeader("Accept", "application/json");
      res.json(estcivil);
      });
      // Estado civil
      api.get('/ObtenerEstadoNutricional', async function(req, res){
        console.log("Obteniendo Estado nutricional")
        // Si no existen ambos datos se toma un find empthy de datos dentro
        try {

          estnutri = database.collection("estadoNutricional");
          
          var estnutricional = await estnutri
            .find()
            .toArray();

        } catch (error) {
          console.log(error);
        }

  
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Content-Type", "application/x-www-form-urlencoded");
      res.setHeader("Accept", "application/json");
      res.json(estnutricional);
      });
      // estudio
      api.get('/ObtenerEstudio', async function(req, res){
        console.log("Obteniendo Estado nutricional")
        // Si no existen ambos datos se toma un find empthy de datos dentro
        try {

          estudio = database.collection("estudio");
          
          var estudios = await estudio
            .find()
            .toArray();

        } catch (error) {
          console.log(error);
        }

  
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Content-Type", "application/x-www-form-urlencoded");
      res.setHeader("Accept", "application/json");
      res.json(estudios);
      });
      // ex Cervical
      api.post('/InsertarExCervical', async function(req, res){
        try {
          console.log("Insertando examen Cervical")
          // Aqui se ponen las IDS!!!
          try {
            excervi = database.collection("exCervical");
            var estructura= {
              dilatacion: req.body.dilatacion,
              espinas: req.body.espinas,
              borrado: req.body.borrado,
              estadoExamen: req.body.estadoExamen,
            };
            
            var excervical = await excervi
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
        res.json(excervical);
        });
        // Eliminar droga usada en el embarazo
      api.post('/ActualizarExcervical', async function(req, res){
        try {
          console.log("Insertando examen cervical")
          // Aqui se ponen las IDS!!!
          try {
            excervi = database.collection("exCervical");
            var estructura= {
              dilatacion: req.body.dilatacion,
              espinas: req.body.espinas,
              borrado: req.body.borrado,
              estadoExamen: req.body.estadoExamen,
            };
            
            // var excervical = await excervi
            //   .updateOne(parametro)
  
          } catch (error) {
            console.log(error);
          }
    
        } catch (error) {
          console.log(error);
        }
    
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Content-Type", "application/x-www-form-urlencoded");
        res.setHeader("Accept", "application/json");
        res.json(excervical);
          });
          // Obtener ex cervical
      api.get('/ObtenerExCervical', async function(req, res){
        console.log("Obteniendo Estado nutricional")
        // Si no existen ambos datos se toma un find empthy de datos dentro
        // Se tomaran los examenes cervicales asociados al embarazo
        try {

          excerv = database.collection("exCervical");
          
          var exCervicales = await excerv
            .find({idPaciente:req.body.paciente})
            .toArray();

        } catch (error) {
          console.log(error);
        }

  
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Content-Type", "application/x-www-form-urlencoded");
      res.setHeader("Accept", "application/json");
      res.json(exCervicales);
      });
      // Ex fisico
      api.post('/InsertarExFisico', async function(req, res){
        try {
          console.log("Insertando examen fisico")
          // Aqui se ponen las IDS!!!
          var embarazo = req.body.embarazo;
          try {
            exfisico = database.collection("ExFisico");
            var estructura= {
              cabezaCuello: req.body.cabezaCuello,
              cardioPulmonar: req.body.cardioPulmonar,
              abdomen: req.body.abdomen,
              extremidades: req.body.extremidades,
              genitales:req.body.genitales,
              mamas: req.body.mamas,
              idEmbarazo: embarazo,
            };
            
            var exfisi = await exfisico
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
        res.json(exfisi);
        });
        // Eliminar droga usada en el embarazo
      api.post('/ActualizarExFisico', async function(req, res){
        try {
          console.log("Insertando examen fisico")
          // Aqui se ponen las IDS!!!
          try {
            exfisi = database.collection("exFisico");
            var estructura= {
              cabezaCuello: req.body.cabezaCuello,
              cardioPulmonar: req.body.cardioPulmonar,
              abdomen: req.body.abdomen,
              extremidades: req.body.extremidades,
              genitales:req.body.genitales,
              mamas: req.body.mamas,
              idEmbarazo: embarazo,
            };
            
            // var exFisico = await exfisi
            //   .updateOne(parametro)
  
          } catch (error) {
            console.log(error);
          }
    
        } catch (error) {
          console.log(error);
        }
    
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Content-Type", "application/x-www-form-urlencoded");
        res.setHeader("Accept", "application/json");
        res.json(excervical);
          });
          // Obtener ex cervical
      api.get('/ObtenerExFisico', async function(req, res){
        console.log("Obteniendo examen fisico")
        // Si no existen ambos datos se toma un find empthy de datos dentro
        // Se tomaran los examenes cervicales asociados al embarazo
        var embarazo = req.params.embarazo;
        try {

          exFisico = database.collection("exFisico");
          
          var exFisicos = await excerv
            .find({idEmbarazo:embarazo})
            .toArray();

        } catch (error) {
          console.log(error);
        }

  
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Content-Type", "application/x-www-form-urlencoded");
      res.setHeader("Accept", "application/json");
      res.json(exFisicos);
      });
      

      api.get('/ObtenerGrupoSanguineo', async function(req, res){
        console.log("Obteniendo examen fisico")
        // Si no existen ambos datos se toma un find empthy de datos dentro
        try {

          collection = database.collection("grupoSanguineo");
          
          var documents = await collection
            .find()
            .toArray();

        } catch (error) {
          console.log(error);
        }

  
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Content-Type", "application/x-www-form-urlencoded");
      res.setHeader("Accept", "application/json");
      res.json(documents);
      });

      api.get('/ObtenerLeucorrea', async function(req, res){
        console.log("Obteniendo Leucorrea")
        // Si no existen ambos datos se toma un find empthy de datos dentro
        try {

          collection = database.collection("leucorrea");
          
          var documents = await collection
            .find()
            .toArray();

        } catch (error) {
          console.log(error);
        }

  
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Content-Type", "application/x-www-form-urlencoded");
      res.setHeader("Accept", "application/json");
      res.json(documents);
      });
      api.get('/ObtenerLiquidoAmniotico', async function(req, res){
        console.log("Obteniendo liquido amniotico")
        // Si no existen ambos datos se toma un find empthy de datos dentro
        try {

          collection = database.collection("liquidoAmniotico");
          
          var documents = await collection
            .find()
            .toArray();

        } catch (error) {
          console.log(error);
        }

  
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Content-Type", "application/x-www-form-urlencoded");
      res.setHeader("Accept", "application/json");
      res.json(documents);
      });

      api.get('/ObtenerMedicamento', async function(req, res){
        console.log("Obteniendo medicamento")
        // Si no existen ambos datos se toma un find empthy de datos dentro
        try {

          collection = database.collection("grupoSanguineo");
          
          var documents = await collection
            .find()
            .toArray();

        } catch (error) {
          console.log(error);
        }

  
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Content-Type", "application/x-www-form-urlencoded");
      res.setHeader("Accept", "application/json");
      res.json(documents);
      });
      api.get('/ObtenermedicamentoEmbarazo', async function(req, res){
        console.log("Obteniendo medicamentos usados en el embarazo")
        // Si no existen ambos datos se toma un find empthy de datos dentro
        try {
          collection = database.collection("medicamentoEmbarazo");
          
          var documents = await collection
            .find({idEmbarazo: req.params.idEmbarazo})
            .toArray();

        } catch (error) {
          console.log(error);
        }

  
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Content-Type", "application/x-www-form-urlencoded");
      res.setHeader("Accept", "application/json");
      res.json(documents);
      });

      api.get('/ObtenerMovimientoFetal', async function(req, res){
        console.log("Obteniendo examen fisico")
        // Si no existen ambos datos se toma un find empthy de datos dentro
        try {

          collection = database.collection("movimientoFetal");
          
          var documents = await collection
            .find()
            .toArray();

        } catch (error) {
          console.log(error);
        }

  
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Content-Type", "application/x-www-form-urlencoded");
      res.setHeader("Accept", "application/json");
      res.json(documents);
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

    api.get('/ObtenerPatologia', async function(req, res){
      console.log("Obteniendo patologia")
      // Si no existen ambos datos se toma un find empthy de datos dentro
      try {

        collection = database.collection("patologia");
        
        var documents = await collection
          .find()
          .toArray();

      } catch (error) {
        console.log(error);
      }


    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/x-www-form-urlencoded");
    res.setHeader("Accept", "application/json");
    res.json(documents);
    });

    api.get('/ObtenerPerdidaVaginal', async function(req, res){
      console.log("Obteniendo perdida vaginal")
      // Si no existen ambos datos se toma un find empthy de datos dentro
      try {

        collection = database.collection("perdidaVaginal");
        
        var documents = await collection
          .find()
          .toArray();

      } catch (error) {
        console.log(error);
      }


    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/x-www-form-urlencoded");
    res.setHeader("Accept", "application/json");
    res.json(documents);
    });
    api.get('/ObtenerPresentacionFeto', async function(req, res){
      console.log("Obteniendo presentacion feto")
      // Si no existen ambos datos se toma un find empthy de datos dentro
      try {

        collection = database.collection("presentacionFeto");
        
        var documents = await collection
          .find()
          .toArray();

      } catch (error) {
        console.log(error);
      }


    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/x-www-form-urlencoded");
    res.setHeader("Accept", "application/json");
    res.json(documents);
    });

    api.get('/ObtenerPrevision', async function(req, res){
      console.log("Obteniendo prevision")
      // Si no existen ambos datos se toma un find empthy de datos dentro
      try {

        collection = database.collection("prevision");
        
        var documents = await collection
          .find()
          .toArray();

      } catch (error) {
        console.log(error);
      }


    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/x-www-form-urlencoded");
    res.setHeader("Accept", "application/json");
    res.json(documents);
    });

    api.get('/ObtenerProgenitor', async function(req, res){
      console.log("Obteniendo progenitor")
      // Si no existen ambos datos se toma un find empthy de datos dentro
      try {

        collection = database.collection("progenitor");
        
        var documents = await collection
          .find()
          .toArray();

      } catch (error) {
        console.log(error);
      }


    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/x-www-form-urlencoded");
    res.setHeader("Accept", "application/json");
    res.json(documents);
    });

    api.get('/ObtenerRegion', async function(req, res){
      console.log("Obteniendo regiones")
      // Si no existen ambos datos se toma un find empthy de datos dentro
      try {

        collection = database.collection("region");
        
        var documents = await collection
          .find()
          .toArray();

      } catch (error) {
        console.log(error);
      }


    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/x-www-form-urlencoded");
    res.setHeader("Accept", "application/json");
    res.json(documents);
    });

    api.get('/ObtenerTipoEmbarazo', async function(req, res){
      console.log("Obteniendo tipo embarazo")
      // Si no existen ambos datos se toma un find empthy de datos dentro
      try {

        collection = database.collection("tipoEmbarazo");
        
        var documents = await collection
          .find()
          .toArray();

      } catch (error) {
        console.log(error);
      }


    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/x-www-form-urlencoded");
    res.setHeader("Accept", "application/json");
    res.json(documents);
    });    
     
    api.get('/ObtenerTipoEstablecimiento', async function(req, res){
      console.log("Obteniendo tipo establecimiento")
      // Si no existen ambos datos se toma un find empthy de datos dentro
      try {

        collection = database.collection("tipoEstablecimiento");
        
        var documents = await collection
          .find()
          .toArray();

      } catch (error) {
        console.log(error);
      }


    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/x-www-form-urlencoded");
    res.setHeader("Accept", "application/json");
    res.json(documents);
    });    
    api.get('/ObtenerTipoMedicamento', async function(req, res){
      console.log("Obteniendo tipo medicamento")
      // Si no existen ambos datos se toma un find empthy de datos dentro
      try {

        collection = database.collection("tipoMedicamento");
        
        var documents = await collection
          .find()
          .toArray();

      } catch (error) {
        console.log(error);
      }


    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/x-www-form-urlencoded");
    res.setHeader("Accept", "application/json");
    res.json(documents);
    });    
    api.get('/ObtenerTipoPatologia', async function(req, res){
      console.log("Obteniendo tipo patologia")
      // Si no existen ambos datos se toma un find empthy de datos dentro
      try {

        collection = database.collection("tipoPatologia");
        
        var documents = await collection
          .find()
          .toArray();

      } catch (error) {
        console.log(error);
      }


    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/x-www-form-urlencoded");
    res.setHeader("Accept", "application/json");
    res.json(documents);
    });    



    api.get('/ObtenertipoProfesional', async function(req, res){
      console.log("Obteniendo tipo profesional")
      // Si no existen ambos datos se toma un find empthy de datos dentro
      try {

        collection = database.collection("tipoProfesional");
        
        var documents = await collection
          .find()
          .toArray();

      } catch (error) {
        console.log(error);
      }


    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/x-www-form-urlencoded");
    res.setHeader("Accept", "application/json");
    res.json(documents);
    });    

    api.get('/ObtenerTipoUsuario', async function(req, res){
      console.log("Obteniendo tipo usuario")
      // Si no existen ambos datos se toma un find empthy de datos dentro
      try {

        collection = database.collection("tipoUsuario");
        
        var documents = await collection
          .find()
          .toArray();

      } catch (error) {
        console.log(error);
      }


    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/x-www-form-urlencoded");
    res.setHeader("Accept", "application/json");
    res.json(documents);
    });
    
    api.get('/ObtenerTonoUterino', async function(req, res){
      console.log("Obteniendo tono Uterino")
      // Si no existen ambos datos se toma un find empthy de datos dentro
      try {

        collection = database.collection("tonoUterino");
        
        var documents = await collection
          .find()
          .toArray();

      } catch (error) {
        console.log(error);
      }


    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/x-www-form-urlencoded");
    res.setHeader("Accept", "application/json");
    res.json(documents);
    });    


    api.get('/ObtenerDataFichaA', async function(req, res){
      console.log("Obteniendo datos preeliminares Ficha A")
      // Si no existen ambos datos se toma un find empthy de datos dentro
      try {
        //  Al abrirse la ficha A, se deberia obtener:
        // Region, Prevision, Estudios, Estaado Civil, Ocupacion,
        //  grupo sanguineo(for both cbox),patologias (familiar, medica y quirurgica)
        // Drogas, Anticoncepcion
        var allData= [];
        
        regiones = database.collection("region");
        
        var region = await regiones
          .find()
          .toArray();
        allData.push(region)
        previsiones = database.collection("prevision");
        
        var prevision = await previsiones
          .find()
          .toArray();
        allData.push(prevision)
        estudios = database.collection("estudio");
          
        var estudio = await estudios
          .find()
          .toArray();
        allData.push(estudio)
        estadosCiviles = database.collection("estadoCivil");
        
        var estadoCivil = await estadosCiviles
          .find()
          .toArray();
        allData.push(estadoCivil)
        actividades = database.collection("actividad");
        var actividad = await actividades
          .find()
          .toArray();
        allData.push(actividad)
        gruposSanguineos = database.collection("grupoSanguineo");
        
        var gruposSanguineo = await gruposSanguineos
          .find()
          .toArray();
        allData.push(gruposSanguineo)
        patologias = database.collection("patologia");
    
        var patologia = await patologias
          .find()
          .toArray();
        allData.push(patologia)

        tiposPatologias = database.collection("tipoPatologia");
    
        var tipoPatologia = await tiposPatologias
          .find()
          .toArray();
        allData.push(tipoPatologia)

        drogas = database.collection("droga");
        var droga = await drogas
          .find()
          .toArray();
        allData.push(droga)
        anticonceptivo = database.collection("anticonceptivo");
        var anticonceptivos = await anticonceptivo
          .find()
          .toArray();
        allData.push(anticonceptivos)

      } catch (error) {
        console.log(error);
      }


    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/x-www-form-urlencoded");
    res.setHeader("Accept", "application/json");
    res.json(allData);
    });    

    
}