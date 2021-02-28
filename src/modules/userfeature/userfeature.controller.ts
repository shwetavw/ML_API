import { Controller, Get, Post, Body, Query, Res, HttpStatus } from '@nestjs/common';
import { ApiOkResponse, ApiTags, ApiBadRequestResponse, ApiResponse } from '@nestjs/swagger';
import { UserFeatureService } from './userfeature.service';
import { CreateUserFeatureDTO, QueryParamDTO } from './userfeature.dto';
import { Response } from 'express'

@ApiTags('User_Feature')
@Controller('feature')
export class UserfeatureController {
    constructor(private userFeatureService: UserFeatureService) { }

    @Get()
    @ApiOkResponse()
    @ApiBadRequestResponse({
        description: 'Bad Request. Error fetching records.'
    })
    public async findByEmailAndFeature(@Query() query: QueryParamDTO, @Res() res: Response) {
        try {
            const result = await this.userFeatureService.findByEmailAndFeature(query);
            return res.status(200).send({ canAccess: result });
        }
        catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).send(error.message);
        }
    }

    @Post()
    @ApiOkResponse({
        status: HttpStatus.OK
    })
    @ApiResponse({
        status: HttpStatus.NOT_MODIFIED
    })
    @ApiBadRequestResponse({
        description: 'Bad Request. Error creating record.',
    })
    async create(@Body() request: CreateUserFeatureDTO, @Res() res: Response) {
        try {
            const isSaved = await this.userFeatureService.create(request);
            if (isSaved) {
                return res.status(200).send();
            }

            return res.status(304).send();
        }
        catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).send(error.message);
        }
    }
}
