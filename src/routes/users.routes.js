import {Router} from 'express';
import { pool } from '../db.js'


const router = Router(); 

router.get('/users', async (req, res) => {
    const { rows } = await pool.query("SELECT * FROM users"); 

    res.json(rows); 
}); 

router.get('/users/:id', async (req, res) => {
    const {id} = req.params; 
    const {rows} = await pool.query(`SELECT * FROM users WHERE id = ${id}`); 

    if(rows.length === 0) return res.status(404).json({message: "User not found"}); 

    res.json(rows); 
}); 

router.post('/users', (req, res) => {
    res.send('Creando user'); 
}); 

router.delete('/users/:id', async (req, res) => {
    const {id} = req.params; 
    const {rows, rowCount} = await pool.query(`DELETE FROM users WHERE id = ${id}`); 
    //Se requiere rowCount y no rows.length debido a que en delete row.length siempre es 0
    if(rowCount === 0) return res.status(404).json({message: "User not found"}); 
    res.json(`Usuario ${rows.name} eliminado`); 
}); 

router.put('/users/:id', (req, res) =>{
    const {id} = req.params; 
    res.send("Actualizando usuario " + id); 
});

export default router; 