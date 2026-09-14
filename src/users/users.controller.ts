import { Body, Controller, Get, Param, ParseIntPipe, Post, Query, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service.js'
import { CreateUserDto } from './dto/create-user.dto.js';

@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService) { }

    @Get('/')
    getUsers(@Query('name') name?: string) {
        if (name) {
            return this.userService.findByName(name)
        }
        return this.userService.findAll()
    }

    @Post('/')
    postUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto)
    }

    @Get(':id')
    getUserById(
        @Param('id', ParseIntPipe) id: number,
    ) {
        return this.userService.findUser(id)
    }

}
