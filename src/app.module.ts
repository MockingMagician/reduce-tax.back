import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { UserController } from './user/user.controller'
import { MySQLService } from './database/mysql.service'
import { UserService } from './user/user.service'
import { UserRepository } from './user/user.repository'

@Module({
    imports: [ConfigModule.forRoot()],
    controllers: [UserController],
    providers: [MySQLService, UserRepository, UserService],
})
export class AppModule {}
