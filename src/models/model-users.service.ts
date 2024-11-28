import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Knex } from 'knex';

@Injectable()
export class ModelUsersService {

    constructor(
        private readonly conn: DatabaseService
    ){}

    createUser = async () => {
        return await this.conn.connect().then(async (db: any) => {
            return await db('users as u')
            .select([
                'u.id as id',
                'u.name as name',
            ])
            // .leftJoin('likes as l', (join: Knex.JoinClause) => {
            //     join.on('l.post_id', '=', 'p.id')
            // })
            // .leftJoin('post_comments as pc', (join: Knex.JoinClause) => {
            //     join.on('pc.post_id', '=', 'p.id')
            // })
            // .andWhere('p.status', db.raw('"active"'))
            // .groupBy('p.id')
            .finally(async () => await db.destroy())
        })
    }
}
