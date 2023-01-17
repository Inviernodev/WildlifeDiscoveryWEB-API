import { Router } from 'express';
const router = Router();

import { connection } from '../connections/mysql.connection.js';

router.get('/', (request, response) => {
    response.send(`
    <a href='http://localhost:3000/charts/dibujo'>dibujo</a>
    <a href='http://localhost:3000/charts/dibujoimagen'>dibujoimagen</a>
    `)
});


router.get('/dibujoimagen', (request, response) => {
    connection.query(`
        SELECT
        DS.id, DS.nombres, DS.apellido_paterno, DS.apellido_materno, DR.imagen
        FROM ulearnet_reim_pilotaje.usuario as DS
        INNER JOIN ulearnet_reim_pilotaje.dibujo_reim as DR
        ON DS.id = DR.usuario_id
        WHERE DR.reim_id = 666 and DR.actividad_id = 60011;
    `, function (err, result) {
        if (err) throw err;
        response.send(result);
    });
});


router.get('/select-actividades', (request, response) => {
    connection.query(`SELECT * FROM ulearnet_reim_pilotaje.actividad
    WHERE id = 60008
    OR id = 60009
    OR id = 60010
    OR id = 60011;`, function (err, result) {
        if (err) throw err;
        response.send(result);
    });
});

router.get('/tiempo-actividad/:idActividad', (request, response) => {
    console.log(request.params.idActividad);
    connection.query(`
        SELECT
        TA.inicio, TA.final, TA.usuario_id, US.nombres, US.apellido_paterno, US.apellido_materno
        FROM ulearnet_reim_pilotaje.tiempoxactividad as TA
        INNER JOIN ulearnet_reim_pilotaje.usuario as US
        ON TA.usuario_id = US.id
        WHERE TA.reim_id = 666
        AND actividad_id = ${request.params.idActividad};
    `, function (err, result) {
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

router.get('/botes', (request, response) => {
    connection.query(`SELECT count(*) totalCount,
    US.id, US.nombres, US.apellido_paterno, US.apellido_materno, RES.id_elemento, RES.datetime_touch
    FROM ulearnet_reim_pilotaje.usuario as US
    INNER JOIN ulearnet_reim_pilotaje.alumno_respuesta_actividad as RES 
    ON US.id = RES.id_user 
    WHERE RES.id_reim = 666 and RES.id_elemento = 6660106
    GROUP BY DATE_FORMAT(RES.datetime_touch,"%d-%m-%y") ;
    `, function (err, result) {
        if (err) throw err;
        response.send(result);
    });
});


router.get('/plataformas', (request, response) => {
    connection.query(`SELECT
    US.id, US.nombres, US.apellido_paterno, US.apellido_materno, RES.resultado, RES.datetime_touch
    FROM ulearnet_reim_pilotaje.usuario as US
    INNER JOIN ulearnet_reim_pilotaje.alumno_respuesta_actividad as RES 
    ON US.id = RES.id_user 
    WHERE RES.id_reim = 666 and RES.id_elemento = 6660113;`, function (err, result) {
        if (err) throw err;
        response.send(result);
    });
});


export default router;
