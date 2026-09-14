import { IsAlpha, IsEmail, IsInt, IsNotEmpty, IsNumber, IsString, Length, max, Min, min } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty({message:'Name should not be empty'})
    @IsAlpha('en-US',{message:'Name must contain letters only'})
    readonly name: string


    @IsString()
    @IsNotEmpty({message:"Email is required"})
    @IsEmail()
    readonly email: string

    @IsInt()
    @IsNumber()
    @IsNotEmpty()
    @Min(18,{message:'age must be atleast 18'})
    readonly age: number
}