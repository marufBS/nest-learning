import { IsAlpha, IsEmail, IsInt, IsNotEmpty, IsNumber, IsString, Length, max, Min, min } from "class-validator";
import { Type } from 'class-transformer'
export class CreateUserDto {
    @IsString()
    @IsNotEmpty({ message: 'Name should not be empty' })
    @IsAlpha('en-US', { message: 'Name must contain letters only' })
    readonly name: string


    @IsString()
    @IsNotEmpty({ message: "Email is required" })
    @IsEmail()
    readonly email: string

    @IsInt()
    @Min(18, { message: 'age must be atleast 18' })
    @Type(() => Number)
    readonly age: number
}