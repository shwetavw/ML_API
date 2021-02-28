import { ApiProperty, } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, IsAlpha, MaxLength } from 'class-validator';

export class CreateUserDTO {
    @ApiProperty({ type: String, required: true })
    @IsNotEmpty({ message: 'A $property is required.' })
    @MaxLength(30, { message: 'The $property must not longer than $constraint1 characters' })
    @IsEmail()
    readonly email: string;

    @ApiProperty({ type: String, required: true })
    @IsNotEmpty({ message: 'A $property is required.' })
    @IsAlpha('en-US', { message: 'The $property must have only alphabets.' })
    @MaxLength(20, { message: 'The $property must not longer than $constraint1 characters' })
    readonly username: string;
}