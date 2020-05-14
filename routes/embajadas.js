const crudEmbajadas = (app) => {
    const Embajada = require('../models/embajadas.js');
    
    //Funciones de endpoints
    //GET - Devuelve todas las embajadas
    findAllEmbajadas = (req, res) => {
        Embajada.find((err, embajadas) => {
            if (!err) {
                console.log('GET /embajadas');
                res.send(embajadas)
            }
        })
    }
    //URLS
    app.get('/embajadas', findAllEmbajadas); 
}

module.exports = crudEmbajadas;