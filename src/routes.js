// src>routes.js
import { Router } from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import RendaController from "./app/controllers/RendaController";
import FileController from './app/controllers/FileController';
import Despesavariavel from './app/controllers/DespesavariavelController';
import Despesafixa from './app/controllers/DespesafixaController';

import authMiddleware from './app/middlewares/auth';
const upload = multer(multerConfig);

const routes = new Router();

routes.post("/users", UserController.store);
routes.post("/session", SessionController.store);
routes.post("/rendas", RendaController.store);
routes.post("/despesavariavels", Despesavariavel.store);
routes.post("/despesafixas", Despesafixa.store);

routes.use(authMiddleware);

routes.put("/users", UserController.update);
//routes.put("/rendas", RendaController.update);

routes.get('/rendas', RendaController.query);
//routes.delete('/rendas', RendaController.delete);



routes.post('/files', upload.single('file'), FileController.store);


export default routes;
