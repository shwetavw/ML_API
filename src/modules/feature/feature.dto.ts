import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class CreateFeatureDTO {
    @ApiProperty({ type: String, required: true })
    @IsNotEmpty({ message: 'A $property is required.' })
    @MinLength(3, { message: 'The $property must be at least $constraint1 characters.' })
    @MaxLength(20, { message: 'The $property must not longer than $constraint1 characters' })
    readonly name: string;

    @ApiProperty({ type: String, required: true })
    @IsNotEmpty({ message: 'A $property is required.' })
    @MinLength(5, { message: 'The $property must be at least $constraint1 characters.' })
    @MaxLength(200, { message: 'The $property must not longer than $constraint1 characters' })
    readonly description: string;
}