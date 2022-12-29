
app.get('/test', (request, response) => {
    connection.query('SELECT * FROM ulearnet_reim_pilotaje.alumno_respuesta_actividad where id_reim = 666;', function (err, result) {
        if (err) throw err;
        response.send(result);
    });
});


app.get('/gato', (request, response) => {
    connection.query('SELECT * FROM ulearnet_reim_pilotaje.alumno_respuesta_actividad where id_reim = 666;', function (err, result) {
        if (err) throw err;
        response.send(result);
    });
});

export function hola() {

}

export const holaVariable = '';