import { ApiProperty, } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class CreateUserFeatureDTO {
    @ApiProperty()
    @IsEmail()
    readonly email: string;

    @ApiProperty()
    readonly featureName: string;

    @ApiProperty()
    readonly enable: boolean
}

export class QueryParamDTO {
    @ApiProperty()
    @IsEmail()
    readonly email: string;

    @ApiProperty()
    readonly featureName: string;
}