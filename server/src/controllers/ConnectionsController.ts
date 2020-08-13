import { Request, Response } from 'express';
import db from '../database/connection';

export default class ConnectionsController {
  async index(request: Request, response: Response): Promise<Response> {
    const totalConnections = await db('connections').count('* as total');

    const { total } = totalConnections[0];

    return response.status(200).json({ total });
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.body;

    const trx = await db.transaction();

    try {
      await trx('connections').insert({ user_id });

      await trx.commit();
      return response.status(201).send();
    } catch (error) {
      await trx.rollback();

      console.log(error);
      return response.status(400).json({
        message:
          'Unexpected error while creating a connection. Please try again.',
      });
    }
  }
}
