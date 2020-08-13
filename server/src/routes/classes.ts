import express from 'express';
import ClassesController from '../controllers/ClassesController';

const classesRoutes = express.Router();
const classesController = new ClassesController();

classesRoutes.get('/classes', classesController.index);
classesRoutes.post('/classes', classesController.create);

export default classesRoutes;
