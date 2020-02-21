const request = require('request');
module.exports = function(app){

    //listar todo
    app.route('/api/externo/list').get( (req, res, next) => {
        request.get('https://jsonplaceholder.typicode.com/todos', (err, response, body) => {
            if (err) return next(err);
            if (response.statusCode == 200) {
                const data = JSON.parse(body);
                res.status(200).send(data);
            }else{
                res.status(500).send({
                    'status' : 'ERR',
                    'text' : 'Error al listar datos'
                });
            }
        });
    });

    //consultar vehiculo por id
    app.route('/api/externo/completed').get( (req, res, next) => {
        request.get('https://jsonplaceholder.typicode.com/todos?completed=true', (err, response, body) => {
            if (err) return next(err);
            if (response.statusCode == 200) {
                const data = JSON.parse(body);
                res.status(200).send(data);
            }else{
                res.status(500).send({
                    'status' : 'ERR',
                    'text' : 'Error al listar datos'
                });
            }
        });
    });
}