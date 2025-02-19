import {Router} from 'express';
import { getUsers, getSingleUser, createUser, deleteUser, updateUser } from '../controllers/users.controller.js';


const router = Router(); 

router.get('/users', getUsers); 

router.get('/users/:id', getSingleUser); 

router.post('/users', createUser); 

router.delete('/users/:id', deleteUser); 

router.put('/users/:id', updateUser);

export default router; 