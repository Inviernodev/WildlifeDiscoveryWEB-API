import express from 'express';
import cors from 'cors';

import { conectarMySql } from './connections/mysql.connection.js';

import charts from './api/xd.js';

const app = express();
const port = 3000;

app.use(cors({
    origin: '*'
}));

// conexión
await conectarMySql();

app.get('/', (req, res) => {
  res.send('Ruta Madre');
});

app.use('/charts', charts);

app.listen(port, () => {
  console.log(`Escuchando en el puerto: ${port}`);
});