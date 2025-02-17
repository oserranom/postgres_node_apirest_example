//Conexión a BBDD Postgres con dependencia pg
import pg from 'pg';

export const pool = new pg.Pool({
    user: "postgres",
    host: "localhost",
    password: "Parkour.1",
    database: "node_postgre_example",
    port: "5432"
}); 

