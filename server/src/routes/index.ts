import express from 'express';

import classesRoutes from './classes';
import usersRoutes from './users';
import connectionsRoutes from './connections';

const routes = express.Router();

routes.use(classesRoutes);
routes.use(connectionsRoutes);
routes.use(usersRoutes);

export default routes;
