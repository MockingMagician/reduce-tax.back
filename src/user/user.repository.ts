import { Injectable } from '@nestjs/common'
import { MySQLService } from '../database/mysql.service'
import { User } from '@mockingmagician/reduce-tax.model/dist/src'

@Injectable()
export class UserRepository {
    constructor(private mysqlService: MySQLService) {}

    async getAllUserEmails(): Promise<User['email'][]> {
        const connection = await this.mysqlService.getPool().getConnection()

        const [rows] = await connection.query('SELECT * FROM `User` WHERE 1')

        const userEmail = rows as User[]

        connection.release()

        return userEmail.map((user) => user.email)
    }
}
