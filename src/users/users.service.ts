import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            id: 1,
            name: 'Maruf'
        },
        {
            id: 2,
            name: 'Reshmi'
        },
        {
            id: 3,
            name: 'Faria'
        },
        {
            id: 4,
            name: 'Fabiha'
        }
    ]

    findAll() {
        return this.users
    }

    findUser(id: number) {
        console.log(id)
        const user = this.users.find(user => user.id === id)
        if (!user) throw new NotFoundException('User not found')
        return user
    }

    findByName(name: string) {
        const user = this.users.filter(user => user.name === name)
        if (user.length===0) throw new NotFoundException(`User '${name}' not found`)
        return user
    }
}
