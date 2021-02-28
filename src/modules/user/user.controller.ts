import { Controller, Get, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags, ApiBadRequestResponse } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDTO } from './user.dto';
import { Response } from 'express'

@ApiTags('Users')
@Controller('users')
export class UserController {
    constructor(private userService: UserService) { }

    @Get()
    @ApiOkResponse()
    @ApiBadRequestResponse({
        description: 'Bad Request. Error fetching records.'
    })
    public async findAll() {
        return await this.userService.findAll();
    }

    @Post()
    @ApiCreatedResponse({
        description: 'User has been successfully created.'
    })
    @ApiBadRequestResponse({
        description: 'Bad Request. Error creating record.',
    })
    async create(@Body() request: CreateUserDTO, @Res() res: Response) {
        try {
            return await this.userService.create(request);
        }
        catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).send(error.message);
        }
    }
}
