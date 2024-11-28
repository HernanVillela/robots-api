import { Injectable } from '@nestjs/common';
import knex from 'knex';

@Injectable()
export class DatabaseService {
    connect = async () => {
        return knex({
            client: 'mysql2',
            connection: {
                host: process.env.HOST,
                port: 3306,
                user: process.env.USER,
                password: '',// process.env.PASSWORD,
                database: process.env.DATABASE
            },
        });
    }
}
