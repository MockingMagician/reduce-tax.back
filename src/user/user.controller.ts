import { ApiTags } from '@nestjs/swagger'
import { Controller } from '@nestjs/common'
import { UserService } from './user.service'
import { TypedRoute } from '@nestia/core'

@ApiTags('User')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @TypedRoute.Get('user-emails')
    async getAllUserEmails() {
        return this.userService.getAllUserEmails()
    }
}
