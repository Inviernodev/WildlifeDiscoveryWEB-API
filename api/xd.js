
app.get('/dibujo', (request, response) => {
    connection.query('SELECT * FROM ulearnet_reim_pilotaje.alumno_respuesta_actividad where id_reim = 666 and id_actividad = 60011;', function (err, result) {
        if (err) throw err;
        response.send(result);
    });
});


app.get('/dibujoimagen', (request, response) => {
    connection.query('SELECT * FROM ulearnet_reim_pilotaje.dibujo_reim where reim_id = 666;', function (err, result) {
        if (err) throw err;
        response.send(result);
    });
});

app.get('/dibujotiempo', (request, response) => {
    connection.query('SELECT * FROM ulearnet_reim_pilotaje.tiempoxactividad where reim_id = 666 and actividad_id= 60011;', function (err, result) {
        if (err) throw err;
        response.send(result);
    });
});


app.get('/quiz', (request, response) => {
    connection.query('SELECT * FROM ulearnet_reim_pilotaje.alumno_respuesta_actividad where id_reim = 666 and id_actividad = 60010;', function (err, result) {
        if (err) throw err;
        response.send(result);
    });
});

app.get('/quiztiempo', (request, response) => {
    connection.query('SELECT * FROM ulearnet_reim_pilotaje.tiempoxactividad where reim_id = 666 and actividad_id= 60010;', function (err, result) {
        if (err) throw err;
        response.send(result);
    });
});

app.get('/botes', (request, response) => {
    connection.query('SELECT * FROM ulearnet_reim_pilotaje.alumno_respuesta_actividad where id_reim = 666 and id_actividad = 60008;', function (err, result) {
        if (err) throw err;
        response.send(result);
    });
});

app.get('/botestiempo', (request, response) => {
    connection.query('SELECT * FROM ulearnet_reim_pilotaje.tiempoxactividad where reim_id = 666 and actividad_id= 60008;', function (err, result) {
        if (err) throw err;
        response.send(result);
    });
});

app.get('/plataformas', (request, response) => {
    connection.query('SELECT * FROM ulearnet_reim_pilotaje.alumno_respuesta_actividad where id_reim = 666 and id_actividad = 60009;', function (err, result) {
        if (err) throw err;
        response.send(result);
    });
});

app.get('/plataformastiempo', (request, response) => {
    connection.query('SELECT * FROM ulearnet_reim_pilotaje.tiempoxactividad where reim_id = 666 and actividad_id= 60009;', function (err, result) {
        if (err) throw err;
        response.send(result);
    });
});

export function hola() {

}

export const holaVariable = '';