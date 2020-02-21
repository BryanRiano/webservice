const BASEURLORACLE = "https://apex.oracle.com/pls/apex/webservicenodejs/api/";
const request = require('request');
module.exports = function(app){

    //crear vehiculo
    app.route('/api/vehiculo/create').post( (req, res, next) => {
        if (req.body){
            request.post(BASEURLORACLE + 'vehiculo/create', {form: req.body}, (err, response, body) => {
                if (err) return next(err);
                if (response.statusCode == 200) {
                    res.status(200).send({
                        'status' : 'OK',
                        'text' : 'Vehiculo creado'
                    });
                }
            });
        } else {
            res.status(500).send({
                'status' : 'ERR',
                'text' : 'Error al crear el vehiculo'
            });
        }
    });

    //listar vehiculos
    app.route('/api/vehiculo/list').get( (req, res, next) => {
        request.get(BASEURLORACLE + 'vehiculo/list', (err, response, body) => {
            if (err) return next(err);
            if (response.statusCode == 200) {
                const data = JSON.parse(body);
                res.status(200).send({
                    'status' : 'OK',
                    'text' : 'Vehiculos encontrados',
                    'data' : data.items
                });
            }else{
                res.status(500).send({
                    'status' : 'ERR',
                    'text' : 'Error al listar vehiculos'
                });
            }
        });
    });

    //consultar vehiculo por id
    app.route('/api/vehiculo/get/:id').get( (req, res, next) => {
        request.get(BASEURLORACLE + 'vehiculo/'+ req.params.id, (err, response, body) => {
            if (err) return next(err);
            if (response.statusCode == 200) {
                const data = JSON.parse(body);
                res.status(200).send({
                    'status' : 'OK',
                    'text' : 'Vehiculo encontrado',
                    'data' : data
                });
            }else{
                res.status(500).send({
                    'status' : 'ERR',
                    'text' : 'Error al listar vehiculo'
                });
            }
        });
    });


    //actualizar vehiculo
    app.route('/api/vehiculo/update').put((req, res, next) => {
        if (req.body){
            request.put(BASEURLORACLE + 'vehiculo/update', {json: req.body}, (err, response, body) => {
                if (err) return next(err);
                if (response.statusCode == 200) {
                    res.status(200).send({
                        'status' : 'OK',
                        'text' : 'Vehiculo actulizado'
                    });
                }else{
                    res.status(500).send({
                        'status' : 'ERR',
                        'text' : response.statusCode
                    });
                }
            });
        } else {
            res.status(500).send({
                'status' : 'ERR',
                'text' : 'Error al actualizar el vehiculo'
            });
        }
    });

    //eliminar vehiculo
    app.route('/api/vehiculo/delete/:id').delete((req, res, next) => {
        request.delete(BASEURLORACLE + 'vehiculo/'+ req.params.id, (err, response, body) => {
            if (err) return next(err);
            if (response.statusCode == 200) {
                res.status(200).send({
                    'status' : 'OK',
                    'text' : 'Vehiculo eliminado'
                });
            }else{
                res.status(500).send({
                    'status' : 'ERR',
                    'text' : 'Error al eliminar vehiculo'
                });
            }
        });
    })
};