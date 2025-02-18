import express from 'express';
import { PORT } from './config.js';
import router from './routes/users.routes.js';

const app = express(); 

app.use(express.json()); 
app.use(router); 

app.listen(PORT);
console.log('server on port', PORT); 