module.exports = function( api, db, uri, dbopt, rqt){
    require('./soteroApis')(api,db,uri,dbopt,rqt),
    require('./login')(api,db,uri,dbopt,rqt)
}