import express from 'express';
import { PORT } from './config.js';
import router from './routes/users.routes.js';
import morgan from 'morgan';

const app = express(); 

app.use(morgan('dev')); //Con morgan podemos ver peticiones que revibe el back por consola 
app.use(express.json()); //Para entender las peticiones json 
app.use(router); 

app.listen(PORT);
console.log('server on port', PORT); 