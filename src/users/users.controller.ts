import { Controller, Get, Param, Query } from '@nestjs/common';
import { UsersService } from './users.service.js'

@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService) { }

    @Get('/')
    getUsers(@Query('name') name?:string) {
        if(name){
            return this.userService.findByName(name)
        }
        return this.userService.findAll()
    }


    @Get(':id')
    getUserById(
        @Param('id') id: string,
    ) {
        return this.userService.findUser(Number(id))
    }




}
