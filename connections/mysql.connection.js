
import mysql from 'mysql';

export const connection = mysql.createConnection({
    host: 'ulearnet-db.cmfamk37bb89.sa-east-1.rds.amazonaws.com',
    user: 'masterulearnet',
    password: 'Ulearnet2021.',
    database: 'ulearnet_reim_pilotaje'
});

export function conectarMySql() {
    return new Promise((res, rej) => {
        connection.connect((err) => {
            if (err) {
                console.log('error: ' + err.message);
                rej()
            }
            console.log('Connected to the MySQL server.');
            res();
        });
    });
}