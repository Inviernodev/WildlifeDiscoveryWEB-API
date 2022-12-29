import express from 'express';
import cors from 'cors';
import mysql from 'mysql';

const app = express();
const port = 3000;

app.use(cors({
    origin: '*'
}));

let connection = mysql.createConnection({
    host: 'ulearnet-db.cmfamk37bb89.sa-east-1.rds.amazonaws.com',
    user: 'masterulearnet',
    password: 'Ulearnet2021.',
    database: 'ulearnet_reim_pilotaje'
});

let promise1 = new Promise((res, rej) => {
    console.log('Promesa1');
    res();
});
let promise2 = new Promise();

promise1.then(() => {},);

holaSoy = (hola) => {
    this;
}

function holaSoyUnaFuncion(hola) {
    this;
}

connection.connect(function(err) {
    if (err) {
        return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server.');
});

app.get('/test', (req, res) => {
    connection.query('SELECT * FROM ulearnet_reim_pilotaje.alumno_respuesta_actividad where id_reim = 666;', function (err, result) {
        if (err) throw err;
        res.send(result);
    });
});

app.get('/', (req, res) => {
  res.send('asda');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});