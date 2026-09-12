import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get('/')
    returnUsers(){
        return['Maruf','Reshmi','Faria','Fabiha']
    }


    @Get(':id')
    returnSingleUser(){
        return {
            id:1,
            name:'Maruf'
        }
    }
}
