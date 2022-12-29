import express from 'express';
import cors from 'cors';
import mysql from 'mysql';

import estudiantes from './api/estudiantes.js';
import actividades from './api/actividades.js';

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

connection.connect(function(err) {
    if (err) {
        return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server.');
});

app.get('/', (req, res) => {
  res.send('Ruta Madre');
});

app.use('/estudiantes', estudiantes);
app.use('/actividades', actividades);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});