import { Router } from 'express';
const router = Router();

import { connection } from '../connections/mysql.connection.js';

router.get('/', (request, response) => {
    response.send(`
    <a href='http://localhost:3000/charts/dibujo'>dibujo</a>
    <a href='http://localhost:3000/charts/dibujoimagen'>dibujoimagen</a>
    `)
});

router.get('/dibujo', (request, response) => {
    connection.query('SELECT * FROM ulearnet_reim_pilotaje.alumno_respuesta_actividad where id_reim = 666 and id_actividad = 60011;', function (err, result) {
        if (err) throw err;
        response.send(result);
    });
});


router.get('/dibujoimagen', (request, response) => {
    connection.query('SELECT * FROM ulearnet_reim_pilotaje.dibujo_reim where reim_id = 666;', function (err, result) {
        if (err) throw err;
        response.send(result);
    });
});

router.get('/dibujotiempo', (request, response) => {
    connection.query('SELECT * FROM ulearnet_reim_pilotaje.tiempoxactividad where reim_id = 666 and actividad_id= 60011;', function (err, result) {
        if (err) throw err;
        response.send(result);
    });
});


router.get('/quiz', (request, response) => {
    connection.query(`
        SELECT
        US.id, US.nombres, US.apellido_paterno, US.apellido_materno, RES.correcta
        FROM ulearnet_reim_pilotaje.usuario as US
        INNER JOIN ulearnet_reim_pilotaje.alumno_respuesta_actividad as RES
        ON US.id = RES.id_user
        WHERE RES.id_reim = 666
        AND RES.id_actividad = 60010;
    `, function (err, result) {
        if (err) throw err;
        response.send(result);
    });
});

router.get('/quiztiempo', (request, response) => {
    connection.query('SELECT * FROM ulearnet_reim_pilotaje.tiempoxactividad where reim_id = 666 and actividad_id= 60010;', function (err, result) {
        if (err) throw err;
        response.send(result);
    });
});

router.get('/botes', (request, response) => {
    connection.query('SELECT * FROM ulearnet_reim_pilotaje.alumno_respuesta_actividad where id_reim = 666 and id_actividad = 60008;', function (err, result) {
        if (err) throw err;
        response.send(result);
    });
});

router.get('/botestiempo', (request, response) => {
    connection.query('SELECT * FROM ulearnet_reim_pilotaje.tiempoxactividad where reim_id = 666 and actividad_id= 60008;', function (err, result) {
        if (err) throw err;
        response.send(result);
    });
});

router.get('/plataformas', (request, response) => {
    connection.query('SELECT * FROM ulearnet_reim_pilotaje.alumno_respuesta_actividad where id_reim = 666 and id_actividad = 60009;', function (err, result) {
        if (err) throw err;
        response.send(result);
    });
});

router.get('/plataformastiempo', (request, response) => {
    connection.query('SELECT * FROM ulearnet_reim_pilotaje.tiempoxactividad where reim_id = 666 and actividad_id= 60009;', function (err, result) {
        if (err) throw err;
        response.send(result);
    });
});

export default router;
