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
    console.log('Entramos a promesa 1')
    res('promesa1 resolve');
});

let promise2 = new Promise((resolve, reject) => {
    console.log('Entramos a promesa 2')
    setTimeout(() => {
        resolve('promesa2 resolve');
    }, 5000);
});

promise1.then(() => {});

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