import { Request, Response } from 'express';

import db from '../database/connection';
import convertHourToMinutes from '../utils/convertHourToMinutes';
import { IClassScheduleItem } from '../@types/entities';

export default class ClassesController {
  async index(request: Request, response: Response): Promise<Response> {
    const filters = request.query;

    const subject = filters.subject as string;
    const time = filters.time as string;
    const week_day = filters.week_day as string;

    if (!week_day || !subject || !time) {
      return response.status(400).json({
        error: 'Missing filters search classes',
      });
    }

    const timeInMinutes = convertHourToMinutes(filters.time as string);

    const classes = await db('classes')
      .whereExists(function () {
        this.select('class_schedules.*')
          .from('class_schedules')
          .whereRaw('`class_schedules`.`class_id` = `classes`.`id`')
          .whereRaw('`class_schedules`.`week_day` = ??', [Number(week_day)])
          .whereRaw('`class_schedules`.`from` <= ??', [timeInMinutes])
          .whereRaw('`class_schedules`.`to` >= ??', [timeInMinutes]);
      })
      .where({
        'classes.subject': subject,
      })
      .join('users', 'classes.user_id', '=', 'users.id')
      .select(['classes.*', 'users.*']);

    return response.json(classes);
  }

  async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      avatar,
      bio,
      whatsapp,
      subject,
      cost,
      schedule,
    } = request.body;

    const trx = await db.transaction();

    try {
      const insertedUsers = await trx('users').insert({
        name,
        avatar,
        whatsapp,
        bio,
      });
      const insertedUserId = insertedUsers[0];

      const insertedClasses = await trx('classes').insert({
        subject,
        cost,
        user_id: insertedUserId,
      });
      const insertedClassId = insertedClasses[0];

      const classSchedule: IClassScheduleItem[] = schedule.map(
        (scheduleItem: IClassScheduleItem) => {
          return {
            class_id: insertedClassId,
            week_day: scheduleItem.week_day,
            from: convertHourToMinutes(scheduleItem.from),
            to: convertHourToMinutes(scheduleItem.to),
          };
        },
      );

      await trx('class_schedules').insert(classSchedule);

      await trx.commit();

      return response.status(201).send();
    } catch (error) {
      await trx.rollback();

      console.log(error);
      return response.status(400).json({
        message: 'Unexpected error while creating new class. Please try again.',
      });
    }
  }
}
