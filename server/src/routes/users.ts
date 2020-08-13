import express, { Request, Response } from 'express';

const usersRoutes = express.Router();

usersRoutes.get('/users', (request: Request, response: Response) => {
  response.json({ message: 'List Users' });
});

usersRoutes.get('/users/:id', (request: Request, response: Response) => {
  response.json({ message: 'Show User' });
});

usersRoutes.post('/users', (request, response) => {
  response.json({ message: 'Create User' });
});

usersRoutes.put('/users/:id', (request, response) => {
  response.json({ message: 'Update User' });
});

usersRoutes.delete('/users/:id', (request, response) => {
  response.json({ message: 'Delete User' });
});

export default usersRoutes;
