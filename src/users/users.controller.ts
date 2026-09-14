import { BadRequestException, Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service.js'
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';

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

    @Patch(':id')
    updateUserById(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateUserDto: UpdateUserDto
    ) {
        return this.userService.updateUser(id, updateUserDto)
    }

    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number) {
        return this.userService.deleteUser(id)
    }

}
