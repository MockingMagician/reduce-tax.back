import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import * as mysql from 'mysql2/promise'

@Injectable()
export class MySQLService {
    private pool: mysql.Pool

    constructor(private configService: ConfigService) {}

    getPool(): mysql.Pool {
        if (!this.pool) {
            this.pool = mysql.createPool({
                host: this.configService.get<string>('DATABASE_HOST'),
                port: Number(this.configService.get<string>('DATABASE_PORT')),
                user: this.configService.get<string>('DATABASE_USER'),
                database: this.configService.get<string>('DATABASE_NAME'),
                password: this.configService.get<string>('DATABASE_PASSWORD'),
                waitForConnections: true,
                connectionLimit: 50,
                idleTimeout: 60000,
                queueLimit: 0,
                enableKeepAlive: true,
                keepAliveInitialDelay: 0,
                multipleStatements: true,
            })
        }

        return this.pool
    }
}
